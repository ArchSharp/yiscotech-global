import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact YiscoTechGlobal Ltd - Professional Land Surveying Services",
  description: "Contact YiscoTechGlobal Ltd for professional land surveying services. Get a free quote for boundary surveys, topographical mapping, and construction layout services.",
  keywords: ["contact surveyor", "land survey quote", "surveying consultation", "professional surveyor contact"],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
