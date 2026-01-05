import { Button } from '../ui/Button';

export const Volunteer = () => {
  return (
    <section id="contact" className="bg-secondary py-20 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Quer fazer a diferença?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Junte-se a mais de 500 voluntários e ajude-nos a transformar a realidade de milhares de pessoas.
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="primary">Seja Voluntário Hoje</Button>
          <Button className="border-2 border-white text-white hover:bg-white hover:text-secondary">Entrar em Contato</Button>
        </div>
      </div>
    </section>
  );
};