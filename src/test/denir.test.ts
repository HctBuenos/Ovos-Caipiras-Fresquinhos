import { describe, expect, it } from "vitest";
import { contactPhone, orderLink } from "@/lib/denir";

describe("Denir ordering", () => {
  it("uses the contact shown in the supplied reference", () => {
    expect(contactPhone).toBe("5511998693023");
    expect(new URL(orderLink()).hostname).toBe("wa.me");
    expect(new URL(orderLink()).pathname).toBe("/5511998693023");
  });
  it("preserves the customer's order message", () => {
    const message = "Olá, sou Higor. Gostaria de 12 ovos.";
    expect(new URL(orderLink(message)).searchParams.get("text")).toBe(message);
  });
});