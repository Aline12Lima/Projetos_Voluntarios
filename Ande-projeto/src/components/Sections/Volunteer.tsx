import { Button } from '../ui/Button';

export const Volunteer = () => {
  return (
    <section id="contact" className="bg-secondary py-20 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Quer fazer a diferença?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Junte-se aos voluntários e ajude-nos a transformar a realidade de muitas pessoas.
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="primary" href="https://wa.me/5535999104624">Ser voluntário</Button>
          <Button className="border-2 border-white text-white hover:bg-white hover:text-secondary" href="https://wa.me/5535999104624">Entrar em Contato</Button>
        </div>
      </div>
    </section>
  );
};