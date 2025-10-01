import Image from "next/image";
import type { Metadata } from "next";
import "../../../css/elegibilidades.css";
import EntidadePage from "@/components/Entidades/EntidadePage";

export const metadata: Metadata = {
    title: "APLB | Entidades | Gestão Plano de Saúde",
    description: "Página da APLB – Associação Brasileira de Estudantes",
};

export default function Page() {
    return (
        <EntidadePage
            titulo="APLB"
            heroBackground="/img/entidades/aplb/aplb.jpg"
            publicoAlvo="Profissional Liberal"
            atuacao="Nacional"
            nomeCNPJ="Associação dos Profissionais Liberais do Brasil - APLB"
            imagemLateral="/img/entidades/aplb/APLB.jpg"
        />
    );
}
