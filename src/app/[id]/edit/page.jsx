import { getRefeicao } from "@/actions/refeicoes";
import NavBar from "@/components/NavBar";
import FormEdit from "./Form";

export default async function FormRefeicoes({params}) {
    
    const refeicao = await getRefeicao(params.id)

    return (
        <>
            <NavBar active="refeicoes" />
            <FormEdit refeicao={refeicao} />
        </>
    )
}