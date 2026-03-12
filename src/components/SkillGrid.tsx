import React from 'react';
import { motion } from 'motion/react';
import { Target, Zap, Brain, Move, ShieldCheck, Trophy } from 'lucide-react';

interface SkillCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
  key?: React.Key;
}

const SkillCard = ({ icon: Icon, title, description, delay }: SkillCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="glass-card p-8 hover:bg-brand-accent/10 transition-colors group"
  >
    <div className="w-14 h-14 rounded-lg bg-brand-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="text-brand-accent" size={28} />
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-white/60 text-sm leading-relaxed">
      {description}
    </p>
  </motion.div>
);

export const SkillGrid = () => {
  const skills = [
    {
      icon: Target,
      title: "Control y Pase",
      description: "Dominio del balón en espacios reducidos y precisión milimétrica en la distribución del juego.",
      delay: 0.1
    },
    {
      icon: Trophy,
      title: "Finalización",
      description: "Técnicas avanzadas de golpeo y definición ante portería para aumentar tu ratio de gol.",
      delay: 0.2
    },
    {
      icon: Zap,
      title: "Velocidad",
      description: "Mejora de la explosividad, cambios de ritmo y coordinación motriz específica de fútbol.",
      delay: 0.3
    },
    {
      icon: Brain,
      title: "Toma de Decisiones",
      description: "Lectura de juego e inteligencia táctica para elegir siempre la mejor opción bajo presión.",
      delay: 0.4
    },
    {
      icon: Move,
      title: "Regate y 1vs1",
      description: "Recursos técnicos para desequilibrar y superar rivales en situaciones de duelo individual.",
      delay: 0.5
    },
    {
      icon: ShieldCheck,
      title: "Preparación Física",
      description: "Acondicionamiento específico para prevenir lesiones y mantener el rendimiento los 90 minutos.",
      delay: 0.6
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-accent font-bold tracking-[0.3em] uppercase text-xs">Metodología</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">Habilidades que <span className="text-brand-accent italic">Dominarás</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};
