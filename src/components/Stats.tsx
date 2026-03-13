import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

interface StatItemProps {
  value: number;
  label: string;
  suffix?: string;
  key?: React.Key;
}

const StatItem = ({ value, label, suffix = "" }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center p-6 border-r border-white/5 last:border-r-0">
      <div className="text-4xl md:text-5xl font-display font-bold text-brand-accent mb-2">
        {count}{suffix}
      </div>
      <div className="text-xs uppercase tracking-[0.2em] text-white/50 font-medium">
        {label}
      </div>
    </div>
  );
};

export const StatsBar = () => {
  const stats = [
    { value: 100, label: "Personalizado", suffix: "%" },
    { value: 8, label: "Edad Mínima", suffix: "" },
    { value: 4, label: "Máx. por Grupo", suffix: "" },
    { value: 6, label: "Servicios", suffix: "" },
  ];

  return (
    <section className="bg-brand-dark border-y border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatItem
            key={index}
            value={stat.value}
            label={stat.label}
            suffix={stat.suffix}
          />
        ))}
      </div>
    </section>
  );
};