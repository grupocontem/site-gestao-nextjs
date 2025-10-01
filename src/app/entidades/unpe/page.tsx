import type { Metadata } from "next";
import "../../../css/elegibilidades.css";
import EntidadePage from "@/components/Entidades/EntidadePage";

export const metadata: Metadata = {
    title: "UNPE | Entidades | Gestão Plano de Saúde",
    description: "Página da UNPE – Profissionais da Educação (Professores e Pedagogos)",
};

export default function Page() {
    return (
        <EntidadePage
            titulo="UNPE"
            heroBackground="/img/entidades/unpe/unpe.jpg"
            publicoAlvo="Profissionais da Educação (Professores e Pedagogos)"
            atuacao="Nacional"
            nomeCNPJ="UNPE - União Nacional Dos Profissionais Da Educação"
            imagemLateral="/img/entidades/unpe/UNPE.jpg"
        />
    );
}
