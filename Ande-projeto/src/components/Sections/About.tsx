import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

export const About = () => {
  return (
    <Section id="about">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Voluntários ajudando" 
            className="rounded-lg shadow-xl w-full"
          />
          <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg hidden md:block">
            <p className="text-3xl font-bold">10+</p>
            <p className="text-sm">Anos de História</p>
          </div>
        </div>
        
        <div>
          <span className="text-primary font-bold uppercase tracking-wide">Sobre Nós</span>
          <h2 className="text-4xl font-bold text-secondary mt-2 mb-6">Juntos podemos mudar o mundo, um passo de cada vez.</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Somos uma organização sem fins lucrativos dedicada a transformar vidas. Desde 2014, trabalhamos incansavelmente para fornecer recursos essenciais e oportunidades para comunidades carentes.
          </p>
          <ul className="space-y-3 mb-8 text-gray-700">
            <li className="flex items-center gap-2">✅ Transparência total nas doações</li>
            <li className="flex items-center gap-2">✅ 100% focado no impacto social</li>
            <li className="flex items-center gap-2">✅ Equipe apaixonada e dedicada</li>
          </ul>
          <Button variant="primary">Conheça Nossa História</Button>
        </div>
      </div>
    </Section>
  );
};