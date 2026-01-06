import { Heart, Facebook, Instagram} from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
        
        {/* Coluna 1: Info */}
        <div>
          <div className="flex items-center gap-2 font-bold text-2xl text-white mb-4">
            <Heart className="text-primary fill-primary" />
            <span>Ande Fazendo o<span className="text-primary"> Bem</span></span>
          </div>
          <p className="text-sm leading-relaxed">
            Dedicados a melhorar a qualidade de vida de comunidades carentes através de ações diretas e sustentáveis.
          </p>
        </div>

        {/* Coluna 2: Links */}
        <div>
          <h4 className="text-white font-bold mb-4">Navegação</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-primary transition-colors">Quem Somos</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">Serviços</a></li>
            <li><a href="#projects" className="hover:text-primary transition-colors">Projetos</a></li>
            
          </ul>
        </div>

        {/* Coluna 3: Contato */}
        <div>
          <h4 className="text-white font-bold mb-4">Contato</h4>
          <ul className="space-y-2 text-sm">
        
            <li>Extrema - MG</li>
            <li>Andrea</li>
            <li>(35) 99910-4624</li>
          </ul>
        </div>

        {/* Coluna 4: Newsletter */}
        <div>
          <h4 className="text-white font-bold mb-4">Novidades</h4>
          
            
          
          <div className="flex gap-4 mt-6">
  <a
    href="https://www.facebook.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    <Facebook className="hover:text-primary cursor-pointer" size={20} />
  </a>

  <a
    href="https://www.instagram.com/andelutando/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <Instagram className="hover:text-primary cursor-pointer" size={20} />
  </a>
</div>


        </div>
      </div>
      
      <div className="text-center text-xs text-gray-600 mt-12 border-t border-gray-800 pt-8">
        © 2024 ONG Ane Fazendo o Bem. Todos os direitos reservados.
      </div>
    </footer>
  );
};