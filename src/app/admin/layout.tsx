import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Panel - Yiscotech Global Services Limited",
  description: "Admin panel for managing project images and content",
  robots: "noindex, nofollow", // Prevent search engines from indexing admin pages
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
