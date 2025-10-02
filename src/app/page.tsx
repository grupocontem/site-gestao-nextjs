import './../css/home.css'
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Página Inicial | Gestão Plano de Saúde",
    description: "Bem-vindo ao Gestão Plano de Saúde",
};

export default function Home() {
    return (
        <>
              <section>
                  <div
                      id="carouselExampleSlidesOnly"
                      className="carousel carousel-dark slide"
                      data-bs-ride="carousel"
                  >
                      <div className="carousel-inner">
                          <div className="carousel-item active" id="carousel-container" data-bs-interval="5000">
                              <img src={'/img/banner-site.jpg'} className="d-block w-100" id="img-carousel" alt="Banner 02" />
                              <div className="carousel-caption d-md-block">
                                  <h5>GESTÃO PLANO DE SAÚDE <br />Administrando qualidade de vida!</h5>
                                  <br />
                                  <img src={'/img/logos-banner2.png'} alt="logos" className="ans" height="50" />
                                  <br />
                                  <img src={'/img/ans.jpg'} alt="ANS" height="18" className="ans" />
                              </div>
                          </div>
                      </div>
                  </div>
              </section>

              <section>
                  <div className="faixa-laranja d-flex flex-column align-items-center gap-3 text-center p-5">
                      <h3 className="m-0">Simule, compare e contrate planos direto por aqui</h3>
                      <a href="/cotacao" className="text-decoration-none">
                          <button type="button" className="btn btn-outline-light">Compare</button>
                      </a>
                  </div>
              </section>

            <section className="descricao-section">
                <div className="conteudo-descricao text-center">
                    <h1>É TUDO MUITO FÁCIL</h1>
                    <p>O Gestão Plano de Saúde oferece os melhores planos e preços acessíveis para<br />você ter mais tranquilidade, e serviços online pra facilitar sua vida.</p>
                </div>

                <div className="container">
                    <div className="row descricao-item">
                        <div className="col-12 col-md-12">
                            <div className="row align-items-center">
                                <div className="col-lg-3" id="icone-descricao">
                                    <img src={'/img/icone-barras.png'} alt="Ícone barras" />
                                </div>
                                <div className="col-lg-6" id="descricao-texto">
                                    <p><strong>2º VIA DO BOLETO</strong></p>
                                    <p>Seu boleto não chegou? Ou será que você perdeu? Não tem problema, em poucos cliques você imprime um novo.</p>
                                </div>
                                <div className="col-lg-3" id="button-descricao">
                                    <a href="/boleto">
                                        <button type="button" className="btn btn-primary">Clique Aqui</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
  );
}
