'use client'
import Botao from "@/components/Botao"

export default function Error({ error, reset }) {

    return (
        <main className="bg-slate-900 m-20 p-12 rounded-xl">
            <div className="flex flex-col gap-3 justify-between items-center">
                <h2>Um erro aconteceu! {error.message} </h2>
                <div className="flex justify-around gap-2">
                    <Botao href="/" variant="secundary">
                        voltar para home
                    </Botao>

                    <Botao onClick={() => reset()} >
                        Tentar novamente
                    </Botao>
                </div>
            </div>
        </main>
    )
}