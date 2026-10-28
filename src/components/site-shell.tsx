import { Link, useLocation } from "@tanstack/react-router";
import { Egg, ArrowUpRight, Menu, X, MessageCircle } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { orderLink } from "@/lib/denir";

export function WhatsAppButton({ children = "Fazer meu pedido", className = "" }: { children?: ReactNode; className?: string }) {
  return <Button asChild size="lg" className={`whatsapp-button ${className}`}><a href={orderLink()} target="_blank" rel="noopener noreferrer"><MessageCircle />{children}<ArrowUpRight /></a></Button>;
}

export function Brand() {
  return <Link to="/" className="brand" aria-label="Denir, início"><span className="brand-icon"><Egg strokeWidth={1.6} /></span><span><strong>Denir<span className="brand-dot">.</span></strong><small>OVOS CAIPIRAS</small></span></Link>;
}

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const links = [{ to: "/", text: "Início" }, { to: "/ovos", text: "Nossos ovos" }, { to: "/contato", text: "Fale com a gente" }] as const;
  return <><div className="announcement"><span>Do campo para a sua mesa. Com sabor de verdade.</span><span className="announcement-right"><LeafMark /> Naturalmente caipira</span></div><header className="site-header"><div className="container header-inner"><Brand /><nav className="desktop-nav" aria-label="Navegação principal">{links.map(link => <Link key={link.to} to={link.to} className={location.pathname === link.to ? "nav-link active" : "nav-link"}>{link.text}</Link>)}</nav><WhatsAppButton className="header-order">Pedir pelo WhatsApp</WhatsAppButton><Button variant="ghost" size="icon" className="mobile-menu-toggle" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button></div>{open && <nav className="mobile-nav" aria-label="Navegação móvel">{links.map(link => <Link key={link.to} to={link.to} onClick={() => setOpen(false)}>{link.text}</Link>)}</nav>}</header>{children}<footer className="site-footer"><div className="container footer-inner"><Brand /><p>Sabor de roça, fresquinho para sua mesa.</p><a href={orderLink()} target="_blank" rel="noopener noreferrer">(11) 99869-3023 <ArrowUpRight size={16} /></a></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Denir · Ovos caipiras</span><span>Feito com carinho. Como tudo por aqui.</span></div></footer></>;
}

function LeafMark() { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M20 4C8 2 3 8 5 14c2 7 15 6 15-10Z" /><path d="M3 21 15 9" /></svg>; }