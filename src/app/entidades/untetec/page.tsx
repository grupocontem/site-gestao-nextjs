import type { Metadata } from "next";
import "../../../css/elegibilidades.css";
import EntidadePage from "@/components/Entidades/EntidadePage";

export const metadata: Metadata = {
    title: "UNTETEC | Entidades | Gestão Plano de Saúde",
    description: "Página da UNTETEC – Profissionais com formação Profissionalizante, Técnicos e Tecnólogos",
};

export default function Page() {
    return (
        <EntidadePage
            titulo="UNTETEC"
            heroBackground="/img/entidades/untetec/untetec.jpg"
            publicoAlvo="Profissionais com formação Profissionalizante, Técnicos e Tecnólogos"
            atuacao="Nacional"
            nomeCNPJ="União Nacional dos Técnicos e Tecnólogos"
            imagemLateral="/img/entidades/untetec/UNTETEC.jpg"
        />
    );
}
