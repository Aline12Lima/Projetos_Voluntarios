/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Laranja Terra (Botões e destaques)
        primary: '#E76F51', 
        
        // Azul Petróleo Escuro (Fundo do Hero e textos fortes)
        secondary: '#949da1ff', 
        
        // Cinza Texto (Para parágrafos)
        text: '#1d1c1cff',
        
        // Fundo Claro (Para seções alternadas)
        background: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}