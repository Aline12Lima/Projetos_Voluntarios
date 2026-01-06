import { Section } from '../ui/Section';

const projects = [
  { title: "Continuar beneficiando nossas crianças", category: "Crianças", image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" },
  { title: "Maratona Solidária", category: "Evento", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80" },
  { title: "Arrecador roupas e cobertores", category: "Campanha Agasalho", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80"},
];

export const Projects = () => {
  return (
    <Section id="projects" title="Nossos Projetos" subtitle="Futuro e Eventos">
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((proj, i) => (
          <div key={i} className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer">
            <img src={proj.image} alt={proj.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
              <span className="text-primary text-sm font-bold uppercase">{proj.category}</span>
              <h4 className="text-white text-xl font-bold">{proj.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};