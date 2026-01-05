import { Section } from '../ui/Section';

export const Testimonials = () => {
  return (
    <Section id="testimonials" bg="gray" title="O que dizem" subtitle="Depoimentos">
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-white p-8 rounded-xl shadow-sm italic text-gray-600">
          "Ver o sorriso no rosto das crianças após receberem o material escolar não tem preço. Essa ONG faz um trabalho sério e incrível."
          <div className="mt-4 flex items-center gap-3 not-italic">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">A</div>
            <div>
              <p className="font-bold text-secondary">Ana Souza</p>
              <p className="text-xs text-gray-500">Doadora Mensal</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-sm italic text-gray-600">
          "Fui voluntário na última ação de saúde e fiquei impressionado com a organização. É um orgulho fazer parte."
          <div className="mt-4 flex items-center gap-3 not-italic">
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white font-bold">C</div>
            <div>
              <p className="font-bold text-secondary">Carlos Mendes</p>
              <p className="text-xs text-gray-500">Médico Voluntário</p>
            </div>
          </div>
        </div>
      </div>

      {/* Parcerias Simples */}
      <div className="mt-20 text-center">
        <h3 className="text-xl font-bold text-gray-400 mb-8 uppercase tracking-widest">Nossos Parceiros</h3>
        <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
          {/* Placeholders de logos */}
          <span className="text-2xl font-black text-gray-800">Google</span>
          <span className="text-2xl font-black text-gray-800">Microsoft</span>
          <span className="text-2xl font-black text-gray-800">Amazon</span>
          <span className="text-2xl font-black text-gray-800">Spotify</span>
        </div>
      </div>
    </Section>
  );
};