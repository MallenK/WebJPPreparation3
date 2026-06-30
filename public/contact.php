<?php
header('Content-Type: application/json; charset=utf-8');

// Solo aceptar POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
    exit;
}

// ── Cambia este email cuando sea necesario ──
$destinatario = 'jp.preparation2018@gmail.com';

// ── Rate limiting: máx 5 envíos por IP cada 10 minutos ──
$ip         = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rate_file  = sys_get_temp_dir() . '/jp_rl_' . md5($ip) . '.json';
$now        = time();
$window     = 600; // 10 minutos
$max_req    = 5;

$rate_data = ['count' => 0, 'since' => $now];
if (file_exists($rate_file)) {
    $rate_data = json_decode(file_get_contents($rate_file), true) ?? $rate_data;
}
if ($now - $rate_data['since'] > $window) {
    $rate_data = ['count' => 0, 'since' => $now];
}
if ($rate_data['count'] >= $max_req) {
    http_response_code(429);
    echo json_encode(['success' => false, 'message' => 'Demasiados intentos. Espera unos minutos.']);
    exit;
}
$rate_data['count']++;
file_put_contents($rate_file, json_encode($rate_data), LOCK_EX);

// ── Honeypot: campo trampa que los bots rellenan ──
if (!empty($_POST['website'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Solicitud no válida']);
    exit;
}

// ── Sanitización: eliminar saltos de línea (header injection) y longitud máxima ──
function clean(string $val, int $max = 200): string {
    $val = trim(strip_tags($val));
    $val = str_replace(["\r", "\n", "%0a", "%0d"], '', $val);
    return mb_substr($val, 0, $max);
}

$nombre   = clean($_POST['nombre']   ?? '');
$edad     = clean($_POST['edad']     ?? '', 20);
$email    = clean($_POST['email']    ?? '', 254);
$telefono = clean($_POST['telefono'] ?? '', 30);
$servicio = clean($_POST['servicio'] ?? '', 100);
$mensaje  = mb_substr(trim(strip_tags($_POST['mensaje'] ?? '')), 0, 2000);

// ── Validación de campos obligatorios ──
if (empty($nombre) || empty($email)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Nombre y email son obligatorios']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'El formato del email no es válido']);
    exit;
}

// ── Servicios permitidos (whitelist) ──
$servicios_validos = ['Tecnificación', 'Entrenamiento personalizado', 'Preparación física', 'Información general'];
if (!in_array($servicio, $servicios_validos, true)) {
    $servicio = 'Información general';
}

// ── Construcción del email ──
$asunto = "[JP Preparation] Nueva solicitud de $servicio - $nombre";

$cuerpo = "Nueva solicitud recibida desde jppreparation.com\n";
$cuerpo .= str_repeat('=', 50) . "\n\n";
$cuerpo .= "Nombre:   $nombre\n";
$cuerpo .= "Edad:     $edad\n";
$cuerpo .= "Email:    $email\n";
$cuerpo .= "Teléfono: $telefono\n";
$cuerpo .= "Servicio: $servicio\n\n";
$cuerpo .= "Mensaje:\n$mensaje\n\n";
$cuerpo .= str_repeat('=', 50) . "\n";
$cuerpo .= "Enviado el: " . date('d/m/Y H:i') . "\n";
$cuerpo .= "IP: $ip\n";

$headers  = "From: no-reply@jppreparation.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "Content-Type: text/plain; charset=utf-8\r\n";

$enviado = mail($destinatario, $asunto, $cuerpo, $headers);

if ($enviado) {
    echo json_encode(['success' => true, 'message' => 'Solicitud enviada correctamente']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Error al enviar. Inténtalo de nuevo o contáctanos por WhatsApp.']);
}
