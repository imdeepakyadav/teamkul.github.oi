import React from "react";

const Home = () => {
  return (
    <>
      {/* <Preloader /> */}
      {/* <Header /> */}
      <div className="home">
        {/* Header */}
        <header className="main-header">
          <div className="header-sticky">
            <nav className="navbar navbar-expand-lg">
              <div className="container">
                <a className="navbar-brand" href="/">
                  <img src="./assets/images/logo.svg" alt="Logo" />
                </a>
                <div className="collapse navbar-collapse main-menu">
                  <div className="nav-menu-wrapper">
                    <ul className="navbar-nav mr-auto" id="menu">
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                          home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/about">
                          about us
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="services.html">
                          services
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="portfolio.html">
                          portfolio
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="blog.html">
                          blog
                        </a>
                      </li>
                      <li className="nav-item submenu">
                        <a className="nav-link" href="/">
                          pages
                        </a>
                        <ul>
                          <li className="nav-item">
                            <a className="nav-link" href="service-single.html">
                              service details
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="portfolio-single.html"
                            >
                              portfolio details{" "}
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="blog-single.html">
                              blog details
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="faqs.html">
                              FAQ
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="404.html">
                              404
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item highlighted-menu">
                        <a className="nav-link" href="contact-us.html">
                          free consultation
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="header-btn d-inline-flex">
                    <a href="contact-us.html" className="btn-default">
                      free consultation
                    </a>
                  </div>
                </div>

                <div className="navbar-toggle"></div>
              </div>
            </nav>
            <div className="responsive-menu"></div>
          </div>
        </header>
        {/* Hero section */}
        <div className="hero">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="hero-content">
                  <div className="section-title">
                    <h3 className="wow fadeInUp">about our Company</h3>
                    <h1 className="text-anime-style-3">
                      Web Design, SEO & Internet Marketing For{" "}
                      <span>Your Business</span>
                    </h1>
                  </div>
                  <div className="hero-body">
                    <p className="wow fadeInUp" data-wow-delay="0.5s">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo veritatis et quasi
                      architecto beatae vitae dicta sunt.
                    </p>
                  </div>
                  <div className="hero-footer">
                    <a
                      href="https://919891152002"
                      className="btn-default wow fadeInUp"
                      data-wow-delay="0.75s"
                    >
                      free consultation
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="hero-video-image">
                  <div className="hero-image">
                    <figure className="image-anime reveal">
                      <img src="./assets/images/hero-img.jpg" alt="" />
                    </figure>
                  </div>

                  <div className="hero-play-button">
                    <a
                      href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                      className="popup-video"
                    >
                      <i className="fa-solid fa-play"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About section */}
        <div class="about-us">
          <div class="container">
            <div class="row section-row align-items-center">
              <div class="col-lg-8">
                <div class="section-title">
                  <h3 class="wow fadeInUp">about Company</h3>
                  <h2 class="text-anime-style-3">
                    Websites that tell your brand's story
                  </h2>
                </div>
              </div>
            </div>

            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="about-image">
                  <div class="about-img">
                    <figure class="image-anime reveal">
                      <img src="./assets/images/about-us-img.jpg" alt="" />
                    </figure>
                  </div>
                  <div class="about-consultation">
                    <figure>
                      <img src="./assets/images/about-circle.png" alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              <div class="col-lg-6">
                <div class="about-content">
                  <p class="wow fadeInUp" data-wow-delay="0.25s">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium , totam rem aperiam, eaque ipsa quae
                    ab illo inventore et quasi architecto beatae vitae dicta
                    sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                    sit.
                  </p>

                  <p class="wow fadeInUp" data-wow-delay="0.5s">
                    totam rem aperiam, eaque ipsa quae ab illo inventore et
                    quasi architecto beatae vitae dicta sunt explicabo. sed quia
                    consequuntur magni dolores eos qui ratione voluptatem sequi
                    nesciunt.
                  </p>

                  <p class="wow fadeInUp" data-wow-delay="0.75s">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti cupiditate
                    non provident, similique sunt in culpa qui officia deserunt
                    mollitia animi, id est laborum et dolorum fuga.
                  </p>

                  <ul class="wow fadeInUp" data-wow-delay="1s">
                    <li>Ease of Scalability</li>
                    <li>Instant Impact</li>
                    <li>Expertise and Experience</li>
                    <li>Time Zone Aligned</li>
                    <li>Full Flexibility</li>
                    <li>Proactive Support</li>
                  </ul>

                  <a
                    href="/"
                    class="btn-default wow fadeInUp"
                    data-wow-delay="1.25s"
                  >
                    free consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Services section */}

      </div>
    </>
  );
};

export default Home;
