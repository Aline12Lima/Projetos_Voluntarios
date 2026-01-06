import { Button } from '../ui/Button';

export const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center bg-gray-900">
      {/* Imagem de Fundo com Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Crianças sorrindo" 
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="container mx-auto px-4 z-10 text-center text-white">
        <span className="text-primary font-bold tracking-widest uppercase mb-4 block animate-bounce">
          Pequenas Ações, Grandes Impactos
        </span>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Ajude a Construir um <br/> Futuro Melhor
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-gray-200">
          Nossa missão é levar educação, saúde e esperança para comunidades que precisam de apoio.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button variant="primary" href="https://wa.me/5535999104624">Fazer Doação</Button>
          <Button className="bg-secondary text-secondary hover:bg-gray-200" href="https://wa.me/5535999104624">Saiba Mais</Button>
        </div>
      </div>
    </section>
  );
};