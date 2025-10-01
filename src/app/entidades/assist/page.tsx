import type { Metadata } from "next";
import "../../../css/elegibilidades.css";
import EntidadePage from "@/components/Entidades/EntidadePage";

export const metadata: Metadata = {
    title: "ASSIST BAIXADA | Entidades | Gestão Plano de Saúde",
    description: "Página da ASSIST BAIXADA – Associação dos Servidores dos Municípios da Baixada Fluminense",
};

export default function Page() {
    return (
        <EntidadePage
            titulo="ASSIST BAIXADA"
            heroBackground="/img/entidades/assist/assistbaixada.jpg"
            publicoAlvo="Servidores Públicos dos Municípios da Baixada Fluminense"
            atuacao="Regional/RJ Leste Fluminense"
            nomeCNPJ="Assist Baixada Associação dos Servidores dos Municípios da Baixada Fluminense"
            imagemLateral="/img/entidades/prime/ASSISTBAIXADA.jpg"
        />
    );
}
