"use client";

import Image from "next/image";
import "../../css/elegibilidades.css";

type EntidadePageProps = {
    titulo: string;
    breadcrumbLabel?: string;
    heroBackground: string;
    publicoAlvo: string;
    atuacao: string;
    nomeCNPJ: string;
    imagemLateral: string;
};

export default function EntidadePage({
    titulo,
    breadcrumbLabel = "Entidades",
    heroBackground,
    publicoAlvo,
    atuacao,
    nomeCNPJ,
    imagemLateral,
}: EntidadePageProps) {
    return (
        <>
            <section
                className="breadcrumbs-custom bg-image context-dark"
                style={{
                    backgroundImage: `url(${heroBackground})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="breadcrumbs-custom-inner">
                    <div className="container breadcrumbs-custom-container">
                        <div className="breadcrumbs-custom-main py-5">
                            <h6 className="breadcrumbs-custom-subtitle title-decorated m-0" style={{ color: "black" }}>
                                {breadcrumbLabel}
                            </h6>
                            <h1 className="breadcrumbs-custom-title mt-2" style={{ color: "orange" }}>
                                <mark
                                    style={{
                                        backgroundColor: "#FD0F2E",
                                        borderRadius: 5,
                                        padding: "0 .3em",
                                        color: "white",
                                    }}
                                >
                                    {titulo}
                                </mark>
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conteúdo principal */}
            <section className="section section-lg">
                <div className="container">
                    <div className="row row-50 justify-content-center justify-content-lg-between align-items-start">
                        <div className="col-md-10 col-lg-6">
                            <div className="mb-4">
                                <h3 className="mb-2">Público Alvo:</h3>
                                <h4 className="m-0">— {publicoAlvo}</h4>
                            </div>

                            <div className="mb-4">
                                <h3 className="mb-2">Atuação:</h3>
                                <h4 className="m-0">— {atuacao}</h4>
                            </div>

                            <div className="mb-4">
                                <h3 className="mb-2">Nome conforme CNPJ:</h3>
                                <h4 className="m-0">— {nomeCNPJ}</h4>
                            </div>
                        </div>

                        <div className="col-md-10 col-lg-6 col-xl-5">
                            <div className="w-100" style={{ position: "relative", minHeight: 320 }}>
                                <Image
                                    src={imagemLateral}
                                    alt={titulo}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    style={{ objectFit: "contain" }}
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    <div className="container" style={{ marginTop: 45 }}>
                        <h3 className="text-center">ADMINISTRADORAS PARCEIRAS</h3>
                        <hr style={{ border: "#FD0F2E solid 1px" }} />
                        <div className="d-flex justify-content-center">
                            <Image
                                src={'/img/contem_adm.png'}
                                alt="Administradoras parceiras"
                                width={500}
                                height={188}
                                style={{ height: "auto", width: "100%", maxWidth: 500 }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
