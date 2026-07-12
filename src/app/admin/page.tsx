import { AdminPanel } from "@/components/admin-panel";

export const metadata = {
  title: "Admin",
  description: "Painel administrativo para gerenciar ferramentas, notícias, vídeos e prompts da IAclopédia.",
};

export default function AdminPage() {
  return <AdminPanel />;
}
