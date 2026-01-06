import { PiCoatHanger } from 'react-icons/pi';
import { Section } from '../ui/Section';
import { Heart, BookOpen, Stethoscope, Apple, Baby } from 'lucide-react';

const services = [
  { icon: <Apple size={40} />, title: "Combate a Fome", desc: "Distribuição pontual ou recorrente de cestas básicas para famílias em situação de vulnerabilidade extrema." },
  { icon: <Baby size={40} />, title: "Dia das Crianças", desc: "Levamos a alegria de ser criança para bairros carentes, com distribuição de brinquedos e atividades recreativas em outubro" },
  { icon: <PiCoatHanger size={40} />, title: "Campanha Agasalho", desc: "Nos meses de inverno, mobilizamos a cidade para aquecer lares, coletando roupas e cobertores em bom estado." },
  { icon: <Heart size={40} />, title: "Ações Solidarias", desc: "Em 2025, atendemos mais de 220 crianças, garantindo presentes e uma ceia digna para famílias da zona rural e urbana" },
];

export const Services = () => {
  return (
    <Section id="services" title="Nossas Causas" subtitle="O que fazemos" bg="gray">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((item, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300 border-b-4 border-primary">
            <div className="text-primary mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold text-secondary mb-3">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};