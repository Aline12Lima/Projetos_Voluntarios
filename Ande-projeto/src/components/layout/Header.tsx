import { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { Button } from '../ui/Button';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detecta scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Quem somos', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Depoimentos', href: '#testimonials' },
  ];

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Lógica de cores baseada no scroll
  // Se rolou: texto cinza escuro. Se parado: texto branco.
  const textColorClass = isScrolled ? 'text-gray-600' : 'text-white';
  const logoBaseColor = isScrolled ? 'text-secondary' : 'text-white';

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' // Estado Rolando
          : 'bg-black/50 py-4 backdrop-blur-sm' // Estado Parado (Topo)
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        
        {/* LOGO */}
        <div 
          className={`flex items-center gap-2 font-bold text-xl md:text-2xl cursor-pointer transition-colors ${logoBaseColor}`} 
          onClick={() => handleScrollTo('#hero')}
        >
          {/* O coração sempre laranja */}
          <Heart className="text-primary fill-primary" />
          
          <span>
            ONG{" "}
            <span className={isScrolled ? "text-black" : "text-primary"}>Ande</span>{" "}
            Fazendo o Bem
          </span>
        </div>

        {/* DESKTOP NAVBAR */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo(link.href);
              }}
              // Aqui aplicamos a lógica: Branco no topo, Cinza ao rolar
              className={`${textColorClass} hover:text-primary font-medium transition-colors text-sm uppercase tracking-wide`}
            >
              {link.name}
            </a>
          ))}
          
          <Button variant="primary" onClick={() => handleScrollTo('#contact')}>
            Seja Voluntário
          </Button>
        </nav>

        {/* MOBILE MENU TOGGLE */}
        {/* O ícone do menu também precisa mudar de cor (Branco no topo, Escuro ao rolar) */}
        <button 
          className={`md:hidden ${isScrolled ? 'text-gray-600' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU CONTENT */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-6 px-4 flex flex-col gap-4 border-t">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo(link.href);
              }}
              className="text-gray-600 hover:text-primary font-medium text-center py-2 border-b border-gray-100"
            >
              {link.name}
            </a>
          ))}
           <div className="flex justify-center mt-2">
            <Button variant="primary" onClick={() => handleScrollTo('#contact')}>
              Seja Voluntário
            </Button>
           </div>
        </div>
      )}
    </header>
  );
};