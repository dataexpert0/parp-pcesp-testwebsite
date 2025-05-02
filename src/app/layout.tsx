import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Polícia Civil do Estado de São Paulo – PA:RP",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <header className="bg-zinc-900 text-white py-4 shadow-md">
          <nav className="max-w-5xl mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/Brasão_Nacional_PCSP.png" alt="Brasão da PCESP" className="w-8 h-8" />
              <span className="font-bold text-lg">Polícia Civil do Estado de São Paulo</span>
            </div>
            <ul className="flex gap-4 text-sm">
              <li><Link href="/">Início</Link></li>
              <li><Link href="/seccional">Seccional</Link></li>
              <li><Link href="/setores">Setores</Link></li>
              <li><Link href="/contato">Contato</Link></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}