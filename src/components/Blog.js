export const Blog = () => {
  let blog = document.createElement("section");
  blog.classList.add("section");
  blog.classList.add("blog");

  blog.innerHTML = `
        <div class="container">
            <h2 class="h2 section-title">Últimas noticias sobre moda</h2>

            <ul class="blog-list">
              <li>
                <div class="blog-card">
                  <figure class="card-banner">
                    <a href="#">
                      <img
                        src="https://rawcdn.githack.com/marcosgonzalezmarcial/e-commerce-mvp/ab306b7ce30924bb2f7c0e079c28b07f562e9211/src/assets/images/blog-1.jpg"
                        alt="Cyber Monday Fashion en Amara"
                        loading="lazy"
                        width="1020"
                        height="700"
                        class="w-100"
                      />
                    </a>
                  </figure>

                  <div class="card-content">
                    <ul class="card-meta-list">
                      <li class="card-meta-item">
                        <ion-icon name="folder-open-outline"></ion-icon>

                        <a href="#" class="card-meta-link">Fashion</a>
                      </li>

                      <li class="card-meta-item">
                        <ion-icon name="time-outline"></ion-icon>

                        <a href="#" class="card-meta-link">
                          <time datetime="2021-03-31">31 Mar 2021</time>
                        </a>
                      </li>
                    </ul>

                    <h3 class="h3 card-title">
                      <a href="#">Cyber Monday Fashion en Amara</a>
                    </h3>
                  </div>
                </div>
              </li>

              <li>
                <div class="blog-card">
                  <figure class="card-banner">
                    <a href="#">
                      <img
                        src="https://rawcdn.githack.com/marcosgonzalezmarcial/e-commerce-mvp/ab306b7ce30924bb2f7c0e079c28b07f562e9211/src/assets/images/blog-2.jpg"
                        alt="La decoración de tu casa de verando"
                        loading="lazy"
                        width="1020"
                        height="700"
                        class="w-100"
                      />
                    </a>
                  </figure>

                  <div class="card-content">
                    <ul class="card-meta-list">
                      <li class="card-meta-item">
                        <ion-icon name="folder-open-outline"></ion-icon>

                        <a href="#" class="card-meta-link">Decoración</a>
                      </li>

                      <li class="card-meta-item">
                        <ion-icon name="time-outline"></ion-icon>

                        <a href="#" class="card-meta-link">
                          <time datetime="2021-03-31">31 Mar 2021</time>
                        </a>
                      </li>
                    </ul>

                    <h3 class="h3 card-title">
                      <a href="#">La decoración de tu casa de verando</a>
                    </h3>
                  </div>
                </div>
              </li>

              <li>
                <div class="blog-card">
                  <figure class="card-banner">
                    <a href="#">
                      <img
                        src="https://rawcdn.githack.com/marcosgonzalezmarcial/e-commerce-mvp/ab306b7ce30924bb2f7c0e079c28b07f562e9211/src/assets/images/blog-3.jpg"
                        alt="Ideas únicas de moda que para descubrir"
                        loading="lazy"
                        width="1020"
                        height="700"
                        class="w-100"
                      />
                    </a>
                  </figure>

                  <div class="card-content">
                    <ul class="card-meta-list">
                      <li class="card-meta-item">
                        <ion-icon name="folder-open-outline"></ion-icon>

                        <a href="#" class="card-meta-link">Novedades</a>
                      </li>

                      <li class="card-meta-item">
                        <ion-icon name="time-outline"></ion-icon>

                        <a href="#" class="card-meta-link">
                          <time datetime="2021-03-31">31 Mar 2021</time>
                        </a>
                      </li>
                    </ul>

                    <h3 class="h3 card-title">
                      <a href="#">Ideas únicas sobre moda que te encantarán</a>
                    </h3>
                  </div>
                </div>
              </li>
            </ul>
          </div>
`;
  return blog;
};