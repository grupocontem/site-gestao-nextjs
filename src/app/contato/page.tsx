import type { Metadata } from "next";
import ContatoClient from "@/app/contato/Contato";

export const metadata: Metadata = {
    title: "Contato | Gestão Plano de Saúde",
    description:
        "Busque a segunda via do seu boleto de forma rápida e fácil. Fale conosco pelo WhatsApp ou acesse o Portal do Cliente.",
};

const FORMCARRY_CONTATO = process.env.NEXT_PUBLIC_FORMCARRY_CONTATO!;
const FORMCARRY_OUVIDORIA = process.env.NEXT_PUBLIC_FORMCARRY_OUVIDORIA!;

export default function Page() {
    return (
        <ContatoClient
            formcarryContato={FORMCARRY_CONTATO}
            formcarryOuvidoria={FORMCARRY_OUVIDORIA}
        />
    );
}
