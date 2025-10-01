import type { Metadata } from "next";
import "../../../css/elegibilidades.css";
import EntidadePage from "@/components/Entidades/EntidadePage";

export const metadata: Metadata = {
    title: "AMICOSERV | Entidades | Gestão Plano de Saúde",
    description: "Página da AMICOSERV – Associação de Ajuda Mútua para o Comércio",
};

export default function Page() {
    return (
        <EntidadePage
            titulo="AMICOSERV"
            heroBackground="/img/entidades/amicoserv/amicoserv.jpg"
            publicoAlvo="Comércio"
            atuacao="Nacional"
            nomeCNPJ="Associação de Ajuda Mútua para o Comércio"
            imagemLateral="/img/entidades/amicoserv/AMICOSERV.jpg"
        />
    );
}
