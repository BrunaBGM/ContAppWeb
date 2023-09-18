"use server"

import { revalidatePath } from "next/cache"

const url = process.env.NEXT_PUBLIC_BASE_URL + "/cadastro"

export async function create(formData) {
    const options = {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
            "Content-Type": "application/json"
        }
    }
    
    const resp = await fetch(url, options)
    if (resp.status !== 201){
        const json = await resp.json()
        const erros = json.reduce((str, erro) => str += ". " + erro.message, "")
        return {message: "Erro ao cadastrar usuário" + erros}
    }
    revalidatePath("/cadastro")
    return {ok: "success"}
    
}

export async function getUsuario(){
    const resp = await fetch(url, { next: { revalidate: 3600 } })
    if (!resp.ok) throw new Error("Não pode carregar os dados")
    return resp.json()
  }