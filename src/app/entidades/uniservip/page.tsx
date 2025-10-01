import type { Metadata } from "next";
import "../../../css/elegibilidades.css";
import EntidadePage from "@/components/Entidades/EntidadePage";

export const metadata: Metadata = {
    title: "UNISERVIP | Entidades | Gestão Plano de Saúde",
    description: "Página da UNISERVIP – União dos Servidores Públicos no Brasil – Uniservip",
};

export default function Page() {
    return (
        <EntidadePage
            titulo="UNISERVIP"
            heroBackground="/img/entidades/uniservip/uniservip.jpg"
            publicoAlvo="Servidor Público"
            atuacao="Nacional"
            nomeCNPJ="União dos Servidores Públicos no Brasil – Uniservip"
            imagemLateral="/img/entidades/uniservip/UNISERVIP.jpg"
        />
    );
}
