import type { Metadata } from "next";
import "../../../css/elegibilidades.css";
import EntidadePage from "@/components/Entidades/EntidadePage";

export const metadata: Metadata = {
    title: "ABRAE | Entidades | Gestão Plano de Saúde",
    description: "Página da ABRAE – Associação Brasileira de Estudantes",
};

export default function Page() {
    return (
        <EntidadePage
            titulo="AMICOSERV"
            heroBackground="/img/entidades/abrae/abrae1.jpg"
            publicoAlvo="Comércio"
            atuacao="Nacional"
            nomeCNPJ="Associação de Ajuda Mútua para o Comércio"
            imagemLateral="/img/entidades/abrae/ABRAE.jpg"
        />
    );
}
