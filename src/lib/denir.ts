export const contactPhone = "5511998693023";
export function orderLink(message = "Olá, Denir! Gostaria de fazer um pedido de ovos caipiras.") {
  return `https://wa.me/${contactPhone}?text=${encodeURIComponent(message)}`;
}