import NavBar from "@/components/NavBar";
import DataRow from "../refeicao/DataRow";
import Botao from "@/components/Botao";
import { getUsuario } from "../actions/usuarios";

export default async function Home() {
  const data = await getUsuario()

  return (
    <>
      <NavBar active={"perfil"} />

      <main className="bg-slate-900 mt-20 m-auto max-w-lg p-12 rounded-xl">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Perfil</h2>
          <Botao href="/diario">
        Criar Diário de Refeições
          </Botao>
        </div>

        <div id="data" className="text-slate-300 m-1">
          {data.map(refeicao => <DataRow refeicao={refeicao} /> )}
        </div>
      </main>
    </>

  )
}