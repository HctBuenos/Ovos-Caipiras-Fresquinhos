import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, Bird, Heart, Check, Sprout } from "lucide-react";
import { WhatsAppButton } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import hero from "@/assets/eggs-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Denir | Ovos caipiras fresquinhos" },
    { name: "description", content: "Conheça os ovos caipiras Denir: naturais, de galinhas criadas soltas e com sabor de roça. Faça seu pedido pelo WhatsApp." },
    { property: "og:title", content: "Denir | Ovos caipiras fresquinhos" },
    { property: "og:description", content: "Sabor de roça, fresquinho para sua mesa. Peça seus ovos caipiras com Denir." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function Index() {
  return <main><section className="hero"><img className="hero-photo" src={hero} alt="Ovos caipiras de cascas variadas em uma embalagem transparente sobre uma mesa no campo" fetchPriority="high" /><div className="hero-wash" /><div className="container hero-inner"><div className="hero-copy"><span className="eyebrow"><span /> SIMPLES, NATURAL E CHEIO DE SABOR</span><h1>Ovos caipiras.<br />Fresquinhos<br /><em>de verdade.</em></h1><p>O sabor da roça que você conhece,<br className="desktop-break" /> com o carinho que sua mesa merece.</p><div className="hero-actions"><WhatsAppButton /><Button asChild variant="link" className="discover-link"><Link to="/ovos">Conheça nossos ovos <ArrowRight /></Link></Button></div><div className="hero-note"><span className="note-icon"><Check size={13} /></span> Galinhas criadas soltas. Qualidade em cada ovo.</div></div><div className="farm-seal"><Sprout size={25} /><span>DE VERDADE</span><strong>100%</strong><span>NATURAL</span></div></div><span className="photo-caption">Um pouquinho do campo, todos os dias.</span></section><section className="benefit-strip"><div className="container benefit-grid"><div><Leaf /><p><strong>100% natural</strong><span>A natureza faz a sua parte.</span></p></div><div><Bird /><p><strong>Galinhas criadas soltas</strong><span>Liberdade que faz a diferença.</span></p></div><div><Heart /><p><strong>Mais sabor à mesa</strong><span>Bom de verdade, em cada receita.</span></p></div></div></section><section className="story-section container"><div className="story-photo"><img src={hero} alt="Detalhe dos ovos caipiras Denir" loading="lazy" /><span className="photo-label"><Sprout size={17} /> Da roça, com carinho.</span></div><div className="story-copy"><span className="eyebrow">A ESSÊNCIA DO QUE É BOM</span><h2>Tem coisas que<br />a natureza faz <em>melhor.</em></h2><p>Uma casca de cada cor. Um sabor que lembra a comida de casa. Nossos ovos caipiras trazem a simplicidade do campo para os pequenos momentos do seu dia.</p><p>No café da manhã, no bolo da família ou naquela receita especial: o bom começa com ingredientes de verdade.</p><Button asChild variant="link" className="story-link"><Link to="/ovos">Descubra o sabor caipira <ArrowRight /></Link></Button></div></section><section className="order-banner"><div className="container order-banner-inner"><div><span className="eyebrow">SUA MESA MERECE ESSE CARINHO</span><h2>Vamos levar esse sabor<br /><em>para a sua casa?</em></h2><p>Fale com Denir e consulte disponibilidade, valores e entrega.</p></div><WhatsAppButton>Quero ovos fresquinhos</WhatsAppButton></div></section></main>;
}
