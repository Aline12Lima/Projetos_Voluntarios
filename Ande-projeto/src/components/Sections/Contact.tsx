import { Section } from '../ui/Section'
import { Button } from '../ui/Button'

export function Contact() {
  return (
    <Section id="contact" title="Entre em Contato">
      <form className="max-w-xl mx-auto space-y-4">
        <input type="text" placeholder="Nome" className="w-full border p-3 rounded" />
        <input type="email" placeholder="Email" className="w-full border p-3 rounded" />
        <textarea placeholder="Mensagem" rows={5} className="w-full border p-3 rounded" />
        <Button variant="primary" className="w-full">Enviar Mensagem</Button>
      </form>
    </Section>
  )
}
