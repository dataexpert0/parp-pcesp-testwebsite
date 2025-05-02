import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Polícia Civil do Estado de São Paulo - RP</title>
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-6">
          Polícia Civil do Estado de São Paulo
        </h1>
        <p className="text-lg mb-4">
          Seja bem-vindo ao portal institucional da 1ª Delegacia Seccional – Centro,
          da Polícia Civil do Estado de São Paulo. (( Página apenas para fins interpretativos no universo do Paradise Roleplay ))
        </p>
        <p className="mb-4">
          Aqui você encontrará informações sobre nossa estrutura, setores internos, diretrizes operacionais
          e comunicações oficiais. Nosso compromisso é com a ordem, a justiça e a atuação estratégica
          no combate ao crime.
        </p>
        <div className="mt-8 border-l-4 border-blue-500 pl-4 italic text-gray-700">
          “Nosso dever é com a verdade. Nossa missão é proteger.”<br />
          <span className="font-bold">– Delegado Regional Ramalho Souza</span>
        </div>

        <section className="bg-red-50 border border-red-200 rounded-xl p-6 mt-10 shadow-sm">
        <h2 className="text-2xl font-bold text-red-700 mb-4">🚨 Utilidade Pública  - Procurados pela Justiça</h2>
      <p className="text-black mb-4">
        Esta é uma área reservada para divulgar informações sobre suspeitos foragidos ou procurados em investigações da 1ª Seccional.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  <div className="border border-red-300 p-4 rounded-xl bg-red-50 shadow-md text-center">
    <img
      src="/caetano1.png"
      alt="Caetano Torres"
      className="w-24 h-24 mx-auto rounded-full object-cover border border-red-400 mb-2"
    />
    <h3 className="font-semibold text-red-800 text-lg tracking-wide">CAETANO TORRES</h3>
    <p className="text-sm text-gray-700 italic">Acusado de homicídio qualificado</p>
  </div>
</div>

  <p className="mt-6 text-sm text-gray-500">
    Informações podem ser repassadas anonimamente pelo canal da Ouvidoria ou diretamente no Plantão.
  </p>
</section>
      </main>
    </>
  );
}