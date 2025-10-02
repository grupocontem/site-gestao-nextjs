import '../../css/sobrenos.css'
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Sobre Nós | Gestão Plano de Saúde",
    description: "Conheça o Gestão Plano de Saúde, sua missão, visão e valores",
};

export default function Sobrenos(){
    return (
        <>
            <section className="faixa-titulo">
                <div className="conteudo">
                    <div className="texto">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12">
                                    <h1>Quem Somos</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="descricao-grupo">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" style={{ textAlign: "justify" }}>
                            <h2>missão, visão e valores</h2>
                            <p>
                                Somos uma administradora em crescimento, com o objetivo de proporcionar as melhores opções que o mercado de planos de saúde pode oferecer.
                            </p>
                            <p>
                                Hoje ter um plano de saúde significa proporcionar mais tranquilidade e atendimento de qualidade quando mais se precisa.
                                Além de contar com uma rede própria e credenciada de hospitais, o plano de saúde também se preocupa com a prevenção de doenças e tratamentos para manter a qualidade de vida.
                            </p>
                            <p>
                                Com uma equipe formada por profissionais experientes, acreditamos que o compromisso é essencial para trazer mais tranquilidade para a vida dos nossos clientes em todas as etapas de suas vidas.
                            </p>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center" style={{ minHeight: '300px'}}>
                            <div style={{ maxWidth: '500px', width: '100%', textAlign: 'center' }}>
                                <img
                                    src="/img/logo_gestao.png"
                                    className="img-bloco"
                                    alt="Missão"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}