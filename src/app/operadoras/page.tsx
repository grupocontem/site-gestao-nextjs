import '../../css/operadoras.css'
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Operadoras | Gestão Plano de Saúde",
    description: "Conheça as operadoras de saúde parceiras do Gestão Plano de Saúde",
};

export default function Page() {
    const imagens = [
        "amacor.jpg",
        "sulmed.jpg",
        "verte.jpg",
        "oplan.jpg",
        "sulmed.jpg",
        "unimed-cv.jpg",
        "unimed-nf.jpg",
        "unimed-odonto.jpg",
        "verte.jpg",
    ];

    return (
        <>
            <section className="faixa-titulo">
                <div className="conteudo">
                    <div className="texto">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h1>OPERADORAS</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="operadoras">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <h3>SOLUÇÕES EM SAÚDE</h3>
                            <p>Sob medida para cada tipo de organização.</p>
                        </div>

                        <div className="col-lg-8 col-md-8 col-sm-12">
                            <div className="row">
                                {imagens.map((img, index) => (
                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={index}>
                                        <div className="card">
                                            <img
                                                src={`/img/operadoras/${img}`}
                                                className="card-img-top"
                                                alt={img.replace(/[-.]/g, " ")}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
