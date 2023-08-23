
import Navbar from "@/components/NavBar"
import TextCarousel from "@/components/TextCarousel"
import './style.css';
import DiarioRefeicao from "@/components/DiarioRefeicao";

export default function Diario() {

  const carouselOptions = ['Hoje', 'Ontem', 'Amanhã'];

  return (
    <>

      <Navbar active={"diario"} />
      <main className='bg-slate-500 p-12 rounded-x1'>
        <div className="textCarousel" >
        <TextCarousel options={carouselOptions} />
        </div>
        <div className="bg-slate-600 flex p-12 gap-12 text-center m-auto text-slate-200 text-sm">
          <ul className="flex flex-col items-center">
            <li>1.200</li>
            <li>Meta</li>
          </ul>
          <ul className="flex flex-col items-center">
            <li>1.146</li>
            <li>Alimentos</li>
          </ul>
          <ul className="flex flex-col items-center">
            <li>200</li>
            <li>Exercicios</li>
          </ul>
          <ul className="flex flex-col items-center">
            <li>256</li>
            <li>Restantes</li>
          </ul>
        </div>
        <div className="textRef">
        <DiarioRefeicao/>
        </div>
        {/* <div className="">
          <div className="bg-slate-500 p-12 gap-3 text-slate-200 inline-block">
            <h2>Cafe da manha</h2>
            <h2>231 kcal</h2>
            <div className="bg-slate-400 flex gap-12">
              <ul>
                <li>Ovo</li>
                <li>1 unidade</li>
                <li>70 kcal</li>
              </ul>
              <ul>
                <li>Leite</li>
                <li>1 copo</li>
                <li>70 kcal</li>
              </ul>
              <ul>
                <li>Pao</li>
                <li>1 unidade</li>
                <li>83 kcal</li>
              </ul>
            </div>
          </div>
          <div className="bg-slate-500 p-12 gap-3 text-slate-200 inline-block">
            <h2>Almoco</h2>
            <h2>434 kcal</h2>
            <div className="bg-slate-400 flex gap-12">
              <ul>
                <li>Arroz</li>
                <li>Branco, 200,0 g</li>
                <li>218 kcal</li>
              </ul>
              <ul>
                <li>Peito de frango</li>
                <li>80,0 g</li>
                <li>128 kcal</li>
              </ul>
              <ul>
                <li>Purê de batata</li>
                <li>100,0g</li>
                <li>88 kcal</li>
              </ul>
            </div>
          </div>
          <div className="bg-slate-500 p-12 gap-3 text-slate-200 inline-block">
            <h2>Jantar</h2>
            <h2>347 kcal</h2>
            <div className="bg-slate-400 flex gap-12">
              <ul>
                <li>Pizza de brócolis</li>
                <li>1 fatia</li>
                <li>242 kcal</li>
              </ul>
              <ul>
                <li>Coca-Cola</li>
                <li>1 copo</li>
                <li>105 kcal</li>
              </ul>
            </div>
          </div>
          <div className="bg-slate-500 p-12 gap-3 text-slate-200 inline-block">
            <h2>Lanche</h2>
            <h2>134 kcal</h2>
            <div className="bg-slate-400 flex gap-12">
              <ul>
                <li>Maçã Fuji</li>
                <li>1 unidade</li>
                <li>56 kcal</li>
              </ul>
              <ul>
                <li>Iogurte grego</li>
                <li>1 unidade</li>
                <li>78 kcal</li>
              </ul>
            </div>
          </div>
          <div className="bg-slate-500 p-12 gap-3 text-slate-200 inline-block">
            <h2>Exercicio</h2>
            <h2>134 kcal</h2>
            <div className="bg-slate-400 flex gap-12">
              <ul>
                <li>Caminhada, 10 min por km</li>
                <li>30 minutos</li>
                <li>200</li>
              </ul>
              <ul>
                <li>Abdominais</li>
                <li>4 series, 20 repeticoes, 0 kg</li>
                <li>0</li>
              </ul>
            </div>
          </div>
        </div> */}
      </main>
    </>
  )
}
