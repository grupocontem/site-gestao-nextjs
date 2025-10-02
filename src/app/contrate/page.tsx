import '../../css/outros-produtos.css'
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Contrate | Gestão Plano de Saúde",
    description: "Contrate nossos outros produtos e serviços",
};

export default function Contrate() {
    const produtos = [
        {
            img: "Logo-Clube-de-Benefícios-saude.png",
            link: "https://www.clubesaudecuidado.com.br/",
            titulo: "Clube de Benefícios",
            target: "_blank"
        },
        {
            img: "porto-seguro.png",
            link: "https://curt.link/plano-saude",
            titulo: "Seguro Viagem",
            target: "_blank"
        },
        {
            img: "logo_gestao.png",
            link: "https://api.whatsapp.com/send?phone=5521998786297",
            titulo: "Plano Odontológico",
            target: "_blank"
        },
        {
            img: "logo_gestao.png",
            link: "https://api.whatsapp.com/send?phone=5521998786297",
            titulo: "Saúde",
            target: "_blank"
        }
    ];

    return (
        <>
            <section className="faixa-titulo">
                <div className="conteudo">
                    <div className="texto">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h1>OUTROS PRODUTOS</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="produtos">
                <div className="container">
                    <div className="row g-3 g-md-4 justify-content-center">
                        {produtos.map((produto, index) => (
                            <div className="col-6 col-md-4 col-lg-3" key={index}>
                                <div className="card produto-card h-100 d-flex flex-column align-items-stretch">
                                    <div className="logo-box">
                                        <img
                                            src={`/img/produtos/${produto.img}`}
                                            alt={produto.titulo}
                                            loading="lazy"
                                        />
                                    </div>

                                    <div className="card-body d-flex flex-column align-items-center p-0">
                                        <h5 className="card-title text-center">{produto.titulo}</h5>
                                        <a
                                            href={produto.link}
                                            target={produto.target}
                                            rel="noopener noreferrer"
                                            className="btn btn-primary w-100 mt-auto"
                                        >
                                            Contrate aqui
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    );
}
