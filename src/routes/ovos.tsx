import { createFileRoute } from "@tanstack/react-router";
import { Leaf, Bird, Egg } from "lucide-react";
import { WhatsAppButton } from "@/components/site-shell";
import hero from "@/assets/eggs-hero.jpg";

export const Route = createFileRoute("/ovos")({
  head: () => ({ meta: [{ title: "Nossos ovos | Denir Ovos Caipiras" }, { name: "description", content: "Ovos caipiras naturais, de galinhas criadas soltas. Conheça o sabor de roça dos ovos Denir e consulte disponibilidade." }, { property: "og:title", content: "Nossos ovos | Denir" }, { property: "og:description", content: "Naturais, fresquinhos e com sabor de roça. Conheça os ovos caipiras Denir." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: EggsPage,
});
function EggsPage() {
  return <main><section className="page-heading container"><span className="eyebrow">DO CAMPO PARA A SUA MESA</span><h1>Nossos ovos <em>caipiras.</em></h1><p>Naturalmente diferentes. Igualmente cheios de sabor.</p></section><section className="product-section container"><div className="product-photo"><img src={hero} alt="Embalagem de ovos caipiras Denir com cascas brancas, marrons e verdes" /></div><div className="product-info"><span className="eyebrow">DENIR · OVOS CAIPIRAS</span><h2>O sabor da roça,<br /><em>em cada ovo.</em></h2><p>Ovos de galinhas criadas soltas, com a variedade de cores e o sabor que fazem parte da natureza.</p><ul className="product-benefits"><li><Leaf /> 100% natural</li><li><Bird /> Galinhas criadas soltas</li><li><Egg /> Fresquinhos para suas receitas</li></ul><WhatsAppButton /><p className="availability">Consulte valores, quantidade disponível e condições de entrega diretamente com Denir.</p></div></section></main>;
}