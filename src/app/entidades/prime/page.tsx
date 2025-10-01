import type { Metadata } from "next";
import "../../../css/elegibilidades.css";
import EntidadePage from "@/components/Entidades/EntidadePage";

export const metadata: Metadata = {
    title: "PRIME LESTE | Entidades | Gestão Plano de Saúde",
    description: "Página da PRIME LESTE – Associação dos Servidores do Município do Leste Fluminense",
};

export default function Page() {
    return (
        <EntidadePage
            titulo="PRIME LESTE"
            heroBackground="/img/entidades/prime/primeleste.jpg"
            publicoAlvo="Servidor Público Municipal"
            atuacao="Municipal (Leste Fluminense)"
            nomeCNPJ="Assist Baixada Associação dos Servidores dos Municípios da Baixada Fluminense"
            imagemLateral="/img/entidades/prime/PRIMELESTE.jpg"
        />
    );
}
