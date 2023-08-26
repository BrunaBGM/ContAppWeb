
import Navbar from "@/components/NavBar"
import TextCarousel from "@/components/TextCarousel"
import './style.css';
import DiarioRefeicao from "@/components/DiarioRefeicao";
import Metas from "@/components/Metas";

export default function Diario() {

  const carouselOptions = ['Hoje', 'Amanhã', 'Ontem'];

  return (
    <>

      <Navbar active={"diario"} />
      <main className='bg-slate-500 p-12 rounded-x1'>
        <div className="textCarousel" >
        <TextCarousel options={carouselOptions} />
        </div>
        <Metas/>
        <DiarioRefeicao/>
      </main>
    </>
  )
}
