import React from "react";
import Layout from "../components/layout";
import Head from "next/head";

export default class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="description"
            content="Responsive bootstrap landing template"
          />
          <meta name="author" content="Coderthemes" />

          <link
            rel="shortcut icon"
            href="/static/assets/template/images/favicon.ico"
          />

          <title>Caxos - Responsive Multipurpose Landing Page Template</title>
          <link
            href="/static/assets/template/css/bootstrap.min.css"
            rel="stylesheet"
          />

          <link
            href="/static/assets/template/css/remixicon.css"
            rel="stylesheet"
          />
          <link href="/static/assets/template/css/style.css" rel="stylesheet" />
        </Head>
        <Layout>
          <section
            className="section home"
            style={{
              backgroundImage: `url("/static/assets/template/images/banner-bg.png")`,
            }}
            id="home"
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  <div className="home-wrapper text-center">
                    <div>
                      <h1 className="text-transparent">
                        Here is the best way to present your apps
                      </h1>
                    </div>
                    <p>
                      You can combine all the templates into a single one, you
                      can take a component from the application theme and use it
                      in the website.
                    </p>

                    <a href="#" className="btn btn-dark mt-4">
                      Get Started{" "}
                      <i className="ri-arrow-right-line align-middle" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="position-relative">
            <div className="shape overflow-hidden text-white">
              <svg
                viewBox="0 0 2880 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>

          <section className="section" id="features">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 text-center">
                  <h2 className="title">Key Features</h2>
                  <p className="title-alt">
                    Looks beautiful & ultra-sharp on Retina Screen Displays.
                    Retina Icons, Fonts & all <br /> others graphics are
                    optimized.
                  </p>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-sm-4">
                  <div className="features-box text-center">
                    <div className="feature-icon">
                      <i className="ri-stack-line"></i>
                    </div>
                    <h3>Strategy Solutions</h3>

                    <p className="text-muted">
                      We put a lot of effort in design, as it’s the most
                      important ingredient of successful website.Sed ut
                      perspiciatis unde omnis iste natus error sit.
                    </p>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="features-box text-center">
                    <div className="feature-icon">
                      <i className="ri-customer-service-2-fill"></i>
                    </div>
                    <h3>Dedicated Support</h3>

                    <p className="text-muted">
                      We put a lot of effort in design, as it’s the most
                      important ingredient of successful website.Sed ut
                      perspiciatis unde omnis iste natus error sit.
                    </p>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="features-box text-center">
                    <div className="feature-icon">
                      <i className="ri-pencil-ruler-2-line"></i>
                    </div>
                    <h3>Digital Design</h3>

                    <p className="text-muted">
                      We put a lot of effort in design, as it’s the most
                      important ingredient of successful website.Sed ut
                      perspiciatis unde omnis iste natus error sit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-sm-10 text-center">
                  <img
                    src="/static/assets/template/images/graphic-1.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="section" id="faqs">
            <div className="container">
              <div className="row text-center">
                <div className="col-sm-12">
                  <h2 className="title">FAQ</h2>
                  <p className="title-alt">
                    Looks beautiful &amp; ultra-sharp on Retina Screen Displays.
                    Retina Icons, Fonts &amp; all <br /> others graphics are
                    optimized.
                  </p>
                  <section class="section-md" id="features">
                    <div class="container">
                      <div class="row align-items-center">
                        <div class="col-sm-6 text-center">
                          <img
                            src="/static/assets/template/images/bulb.png"
                            class="img-fluid"
                            alt="img"
                          />
                        </div>

                        <div class="col-sm-6">
                          <div class="features-alt">
                            <div class="feature-icon">
                              <i class="ri-briefcase-4-line"></i>
                            </div>
                            <h4 class="text-muted">Scalable on Devices.</h4>
                            <h3>Want to learn on a mobile device? </h3>

                            <p class="text-muted">
                              We put a lot of effort in design, as it’s the most
                              important ingredient of successful website.Sed ut
                              unde omnis error sit.We put a lot of effort in
                              design, as it’s the most important ingredient of
                              successful website.
                            </p>

                            <p class="text-muted">
                              We put a lot of effort in design, as it’s the most
                              ingredient of successful website.Sed ut unde omnis
                              iste natus error sit.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section>
                    <div class="container">
                      <div class="row align-items-center">
                        <div class="col-sm-6">
                          <div class="features-alt text-right">
                            <div class="feature-icon">
                              <i class="ri-stack-line"></i>
                            </div>
                            <h4 class="text-muted">Scalable on Devices.</h4>
                            <h3>Want to learn on a mobile device? </h3>

                            <p class="text-muted">
                              We put a lot of effort in design, as it’s the most
                              important ingredient of successful website.Sed ut
                              unde omnis error sit.We put a lot of effort in
                              design, as it’s the most important ingredient of
                              successful website.
                            </p>

                            <p class="text-muted">
                              We put a lot of effort in design, as it’s the most
                              ingredient of successful website.Sed ut unde omnis
                              iste natus error sit.
                            </p>
                          </div>
                        </div>

                        <div class="col-sm-6 text-center">
                          <img
                            src="/static/assets/template/images/design-1.png"
                            class="img-fluid"
                            alt="img"
                          />
                        </div>
                      </div>
                    </div>
                  </section>

                  <section class="section-md">
                    <div class="container">
                      <div class="row align-items-center">
                        <div class="col-sm-6 text-center">
                          <img
                            src="/static/assets/template/images/design-2.png"
                            class="img-fluid"
                            alt="img"
                          />
                        </div>

                        <div class="col-sm-6">
                          <div class="features-alt">
                            <div class="feature-icon">
                              <i class="ri-honour-line"></i>
                            </div>
                            <h4 class="text-muted">Scalable on Devices.</h4>
                            <h3>Want to learn on a mobile device? </h3>

                            <p class="text-muted">
                              We put a lot of effort in design, as it’s the most
                              important ingredient of successful website.Sed ut
                              unde omnis error sit.We put a lot of effort in
                              design, as it’s the most important ingredient of
                              successful website.
                            </p>

                            <p class="text-muted">
                              We put a lot of effort in design, as it’s the most
                              ingredient of successful website.Sed ut unde omnis
                              iste natus error sit.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* <div className="row text-left">
                    <div className="col-sm-6">
                      <div className="question-box">
                        <h4>
                          <span className="text-colored">Q.</span>What is Lorem
                          Ipsum?
                        </h4>
                        <p>
                          <span>
                            <b>A. </b>
                          </span>
                          Lorem ipsum dolor sit amet, in mea nonumes dissentias
                          dissentiunt, pro te solet oratio iriure. Cu sit
                          consetetur moderatius intellegam, ius decore accusamus
                          te. Ne primis suavitate disputando nam. Mutat
                          convenirete.
                        </p>
                      </div>

                      <div className="question-box">
                        <h4>
                          <span className="text-colored">Q.</span>How many
                          variations exist?
                        </h4>
                        <p>
                          <span>
                            <b>A. </b>
                          </span>
                          Lorem ipsum dolor sit amet, in mea nonumes dissentias
                          dissentiunt, pro te solet oratio iriure. Cu sit
                          consetetur moderatius intellegam, ius decore accusamus
                          te. Ne primis suavitate disputando nam. Mutat
                          convenirete.
                        </p>
                      </div>

                      <div className="question-box">
                        <h4>
                          <span className="text-colored">Q.</span>How many
                          variations exist?
                        </h4>
                        <p>
                          <span>
                            <b>A. </b>
                          </span>
                          Lorem ipsum dolor sit amet, in mea nonumes dissentias
                          dissentiunt, pro te solet oratio iriure. Cu sit
                          consetetur moderatius intellegam, ius decore accusamus
                          te. Ne primis suavitate disputando nam. Mutat
                          convenirete.
                        </p>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="question-box">
                        <h4>
                          <span className="text-colored">Q.</span>Is safe use
                          Lorem Ipsum?
                        </h4>
                        <p>
                          <span>
                            <b>A. </b>
                          </span>
                          Lorem ipsum dolor sit amet, in mea nonumes dissentias
                          dissentiunt, pro te solet oratio iriure. Cu sit
                          consetetur moderatius intellegam, ius decore accusamus
                          te. Ne primis suavitate disputando nam. Mutat
                          convenirete.
                        </p>
                      </div>

                      <div className="question-box">
                        <h4>
                          <span className="text-colored">Q.</span>License &
                          Copyright
                        </h4>
                        <p>
                          <span>
                            <b>A. </b>
                          </span>
                          Lorem ipsum dolor sit amet, in mea nonumes dissentias
                          dissentiunt, pro te solet oratio iriure. Cu sit
                          consetetur moderatius intellegam, ius decore accusamus
                          te. Ne primis suavitate disputando nam. Mutat
                          convenirete.
                        </p>
                      </div>

                      <div className="question-box">
                        <h4>
                          <span className="text-colored">Q.</span>Is safe use
                          Lorem Ipsum?
                        </h4>
                        <p>
                          <span>
                            <b>A. </b>
                          </span>
                          Lorem ipsum dolor sit amet, in mea nonumes dissentias
                          dissentiunt, pro te solet oratio iriure. Cu sit
                          consetetur moderatius intellegam, ius decore accusamus
                          te. Ne primis suavitate disputando nam. Mutat
                          convenirete.
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </section>
          <section className="section bg-light" id="clients">
            <div className="container">
              <div className="row text-center">
                <div className="col-sm-12">
                  {/* <div className="mb-4">
                    <img
                      src="/static/assets/template/images/quote-icon.png"
                      alt="quote"
                      className="mx-auto d-block"
                    />
                  </div> */}
                  <h2 className="title">Clients</h2>
                  {/* <p className="slogan">
                    Lorem ipsum dolor sit amet, consectetur adipis.
                  </p> */}

                  {/* <div className="row justify-content-center mt-5">
                    <div className="col-lg-8 text-center">
                      <div>
                        <h4 className="testi-text">
                          I have been using this template for all my company
                          needs for the last 3 years and couldn’t be happier
                          with their service and expertise. They’ve surpassed
                          all of my expectations and customer service!
                        </h4>
                        <div>
                          <div className="mt-4 mb-2">
                            <img
                              src="/static/assets/template/images/user-1.jpg"
                              alt="testi-user"
                              className="rounded-circle mx-auto d-block testi-img"
                            />
                          </div>
                          <p>
                            <strong>Mark Wainright</strong> <br />
                            CEO &amp; Founder of Another Great Company
                          </p>
                        </div>
                      </div>
                    </div>
                  </div> */}

                  <ul className="list-inline client-list">
                    <li className="list-inline-item">
                      <a href="" title="Microsoft">
                        <img
                          src="/static/assets/template/images/clients/microsoft.png"
                          alt="clients"
                        />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="" title="Google">
                        <img
                          src="/static/assets/template/images/clients/google.png"
                          alt="clients"
                        />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="" title="Instagram">
                        <img
                          src="/static/assets/template/images/clients/instagram.png"
                          alt="clients"
                        />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="" title="Converse">
                        <img
                          src="/static/assets/template/images/clients/converse.png"
                          alt="clients"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <div className="position-relative">
            <div className="shape overflow-hidden text-footer">
              <svg
                viewBox="0 0 2880 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                  fill="#343a40"
                ></path>
              </svg>
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}
