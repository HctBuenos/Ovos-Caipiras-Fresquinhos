import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, ArrowUpRight, Phone, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { orderLink } from "@/lib/denir";

export const Route = createFileRoute("/contato")({
  head: () => ({ meta: [{ title: "Fale com Denir | Peça seus ovos caipiras" }, { name: "description", content: "Faça seu pedido de ovos caipiras Denir pelo WhatsApp (11) 99869-3023. Consulte valores e entrega." }, { property: "og:title", content: "Fale com Denir | Ovos Caipiras" }, { property: "og:description", content: "Converse com Denir e leve o sabor da roça para sua mesa." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: ContactPage,
});
function ContactPage() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(12);
  const [note, setNote] = useState("");
  function submit(event: React.FormEvent) {
    event.preventDefault();
    const message = `Olá, Denir! Meu nome é ${name.trim()}. Gostaria de pedir ${quantity} ovos caipiras. Pode me informar o valor, a disponibilidade e as condições de entrega?${note.trim() ? `\n${note.trim()}` : ""}`;
    window.open(orderLink(message), "_blank", "noopener,noreferrer");
  }
  return <main><section className="page-heading container"><span className="eyebrow">VAMOS CONVERSAR?</span><h1>Seu pedido começa<br /><em>com um oi.</em></h1><p>Ovos fresquinhos e uma conversa de gente para gente.</p></section><section className="contact-section container"><div className="contact-copy"><MessageCircle className="contact-symbol" /><h2>Fale com Denir.</h2><p>Tire suas dúvidas, consulte os valores e combine seu pedido diretamente pelo WhatsApp.</p><a className="phone-link" href={orderLink()} target="_blank" rel="noopener noreferrer"><Phone size={20} />(11) 99869-3023<ArrowUpRight size={20} /></a><div className="contact-note"><span className="eyebrow">TUDO COMBINADO DIREITINHO</span><p>Disponibilidade, pagamento e entrega são confirmados na conversa, antes de finalizar seu pedido.</p></div></div><form className="order-form" onSubmit={submit}><h3>O que vai para sua mesa?</h3><label htmlFor="name">Seu nome</label><input id="name" required maxLength={80} placeholder="Como podemos chamar você?" value={name} onChange={event => setName(event.target.value)} /><label htmlFor="quantity">Quantidade de ovos</label><div className="quantity-field"><Button type="button" variant="ghost" size="icon" aria-label="Diminuir quantidade" disabled={quantity <= 1} onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus /></Button><input id="quantity" type="number" min="1" required value={quantity} onChange={event => setQuantity(Math.max(1, Number(event.target.value) || 1))} /><Button type="button" variant="ghost" size="icon" aria-label="Aumentar quantidade" onClick={() => setQuantity(quantity + 1)}><Plus /></Button></div><label htmlFor="note">Quer deixar um recado? <span>(opcional)</span></label><textarea id="note" rows={3} placeholder="Dúvidas ou detalhes do seu pedido..." maxLength={1000} value={note} onChange={event => setNote(event.target.value)} /><Button type="submit" size="lg" className="whatsapp-button"><MessageCircle />Enviar pelo WhatsApp<ArrowUpRight /></Button></form></section></main>;
}