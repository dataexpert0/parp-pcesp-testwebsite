export default function ContatoPage() {
    return (
      <div className="max-w-3xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6">Contato</h1>
  
        <p className="mb-4">
          Aqui você pode conferir os principais canais de comunicação da 1ª Delegacia Seccional - Centro. Use os meios apropriados conforme sua necessidade.
        </p>
  
        <ul className="space-y-4">
          <li>
            <strong>Endereço:</strong><br />
            Pershing Square - Centro, São Paulo - SP
          </li>
          <li>
            <strong>Telefone Geral:</strong><br />
            PABX sob atualização técnica.
          </li>
          <li>
            <strong>Plantão 24h:</strong><br />
            Somente atendimento presencial.
          </li>
          <li>
            <strong>Email institucional:</strong><br />
            seccional.centro@pcesp.sp.gov.br
          </li>
          <li>
            <strong>Ouvidoria:</strong><br />
            ouvidoria@pcesp.sp.gov.br
          </li>
        </ul>
  
        <p className="mt-6 text-sm text-gray-300">
          Em caso de emergência, ligue 190 ou procure a delegacia mais próxima.
        </p>
      </div>
    );
  }  