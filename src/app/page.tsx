import './../css/home.css'
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Página Inicial | Grupo Contém",
    description: "Bem-vindo ao Grupo Contém, onde você encontra os melhores planos de saúde e serviços para sua empresa.",
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
                              <img src={'/img/banner.jpg'} className="d-block w-100" id="img-carousel" alt="Banner 02" />
                              <div className="carousel-caption d-md-block">
                                  <h5>GESTÃO PLANO DE SAÚDE <br />Administrando qualidade de vida!</h5>
                                  <br />
                                  <img src={'/img/logos-banner2.png'} alt="logos" className="ans" height="50" />
                                  <br />
                                  <img src={'/img/ans-banner2.png'} alt="ANS" height="18" className="ans" />
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

            <section className="operadoras py-5">
                <div className="container">
                    <div className="text-center mb-4">
                        <h1 className="section-heading m-0">Nossas Operadoras</h1>
                        <div className="heartbeat mx-auto my-2" aria-hidden="true" />
                        <br/>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-6 col-sm-6 col-md-4 col-lg-3 d-flex">
                            <div className="card logo-card w-100">
                                <img src="/img/operadoras/oplan.png" alt="Oplan" className="card-img-top p-3" />
                            </div>
                        </div>

                        <div className="col-6 col-sm-6 col-md-4 col-lg-3 d-flex">
                            <div className="card logo-card w-100">
                                <img src="/img/operadoras/sulmed.jpg" alt="Sulmed" className="card-img-top p-3" />
                            </div>
                        </div>

                        <div className="col-6 col-sm-6 col-md-4 col-lg-3 d-flex">
                            <div className="card logo-card w-100">
                                <img src="/img/operadoras/odontoempresas.jpg" alt="Odonto Empresas" className="card-img-top p-3" />
                            </div>
                        </div>

                        <div className="col-6 col-sm-6 col-md-4 col-lg-3 d-flex">
                            <div className="card logo-card w-100">
                                <img src="/img/operadoras/norte-fluminense.png" alt="Unimed Norte Fluminense" className="card-img-top p-3" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
  );
}
