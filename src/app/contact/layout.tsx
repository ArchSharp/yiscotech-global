import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contact Yiscotech Global Services Limited - Professional Land Surveying Services",
  description:
    "Contact Yiscotech Global Services Limited for professional land surveying services. Get a free quote for boundary surveys, topographical mapping, and construction layout services.",
  keywords: [
    "contact surveyor",
    "land survey quote",
    "surveying consultation",
    "professional surveyor contact",
  ],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
