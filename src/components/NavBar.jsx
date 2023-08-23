import Link from "next/link";

export default function NavBar({active}) {
    return (
        <nav className="bg-cyan-600 p-6 flex justify-between items-center">
            <ul className="flex gap-12 items-end text-slate-300 text-sm">
                <li>
                    <a href="#">
                        <h1 className="text-2xl font-bold text-slate-100">ContApp</h1>
                    </a>
                </li>
                <li>
                    <Link className={active=="diario" && "text-slate-100"} href="/diario">
                        diario
                    </Link>
                </li>
                <li>
                    <Link className={active=="refeicao" && "text-slate-100"} href="/refeicao">
                        refeicao
                    </Link>
                </li>
                <li>
                    <Link className={active=="exercicios" && "text-slate-100"} href="/exercicios">
                        exercicios
                    </Link>
                </li>
            </ul>

            {/* <div className="h-12 w-12 rounded-full overflow-hidden">
                <img src="https://i.pravatar.cc/100" alt="avatar do usuário" />
            </div> */}
        </nav>
    )
}