import type { Metadata } from "next";
import "../../../css/elegibilidades.css";
import EntidadePage from "@/components/Entidades/EntidadePage";

export const metadata: Metadata = {
    title: "UNED | Entidades | Gestão Plano de Saúde",
    description: "Página da UNED – União Nacional dos Empregados Domésticos",
};

export default function Page() {
    return (
        <EntidadePage
            titulo="UNED"
            heroBackground="/img/entidades/uned/uned.jpg"
            publicoAlvo="Empregados Domésticos"
            atuacao="Nacional"
            nomeCNPJ="União Nacional dos Empregados Domésticos"
            imagemLateral="/img/entidades/uned/UNED.jpg"
        />
    );
}
