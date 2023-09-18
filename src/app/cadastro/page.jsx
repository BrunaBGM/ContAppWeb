"use client"

// import { create } from "@/actions/usuarios";
import Botao from "@/components/Botao";
import InputText from "@/components/InputText";
import NavBar from "@/components/NavBar";
import { CheckIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { redirect } from 'next/navigation'


export default function FormUsuario() {
    const [message, setMessage] = useState("")

    async function handleSubmit(formData){
        const resp = await create(formData)
        if(resp.message){
            setMessage(resp.message)
            return
        }
        redirect("/cadastro")
    }

    return (
        <>
            <NavBar active="cadastro" />

            <main className="bg-slate-900 mt-10 p-12 rounded-xl max-w-lg m-auto">
                <h2 className="text-2xl font-bold">Cadastrar usuário</h2>
                <form action={handleSubmit}>
                    <InputText name="nome" id="nome" label="nome" />
                    <InputText name="email" id="email" label="email" />
                    <div className="flex justify-around mt-4">
                        <Botao href="#" variant="secundary" icon={<ArrowLeftIcon className="h-6 w-6" />}>
                            cancelar
                        </Botao>
                        <Botao element="button" icon={<CheckIcon className="h-6 w-6" />}>
                            salvar
                        </Botao>
                    </div>  
                </form>
                <p>{message}</p>
            </main>
        </>
    )
}