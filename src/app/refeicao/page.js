import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";

async function getRefeicao(){
  const url = "http://localhost:8080/api/refeicao"
  const resp = await fetch(url, { next: { revalidate: 0 } })
  if (!resp.ok) throw new Error("Não pode carregar os dados")
  return resp.json()
}

export default async function Home() {
  const data = await getRefeicao()

  return (
    <>
      <NavBar active={"refeicao"} />

      <main className="bg-slate-900 m-20 p-12 rounded-xl">
        <h2 className="text-2xl font-bold">Refeicoes</h2>

        <div id="data" className="text-slate-300 m-1">
          {data.map(refeicao => <DataRow refeicao={refeicao} /> )}
        </div>
      </main>
    </>

  )
}