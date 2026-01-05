import { Section } from '../ui/Section';
import { Heart, BookOpen, Stethoscope, Apple } from 'lucide-react';

const services = [
  { icon: <Apple size={40} />, title: "Alimentação Saudável", desc: "Distribuímos cestas básicas e refeições nutritivas." },
  { icon: <BookOpen size={40} />, title: "Educação para Todos", desc: "Aulas de reforço e material escolar para crianças." },
  { icon: <Stethoscope size={40} />, title: "Cuidados Médicos", desc: "Campanhas de saúde e vacinação gratuitas." },
  { icon: <Heart size={40} />, title: "Apoio Emocional", desc: "Psicólogos voluntários para suporte familiar." },
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