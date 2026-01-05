import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Ícones de menu mobile

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-orange-500">
            Charity<span className="text-gray-800">Page</span>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-orange-500 transition">Home</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 transition">Sobre</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 transition">Causas</a>
            <a href="#" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
              Doar Agora
            </a>
          </div>

          {/* Botão Mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 text-2xl">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile (Dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-white pb-4 px-4 shadow-lg">
          <a href="#" className="block py-2 text-gray-700">Home</a>
          <a href="#" className="block py-2 text-gray-700">Sobre</a>
          <a href="#" className="block py-2 text-gray-700">Causas</a>
        </div>
      )}
    </nav>
  );
}