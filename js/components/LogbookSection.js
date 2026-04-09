export default {
  name: 'LogbookSection',
  template: `
    <section class="logbook" id="logbook" aria-label="Pole Vault Logbook">
      <div class="container">
        <div class="logbook-layout">

          <div class="about-photo-frame">
            <img src="docs/liz-assets/pvlb-img0.jpeg" alt="Liz Composto" />
          </div>

          <!-- Content -->
          <div class="logbook-content reveal reveal-delay-15">
            <div class="cb-badge-row reveal">
              <span class="badge badge--cobalt-dark">Published</span>
              <span class="cb-badge-label">Dec. 2020</span>
            </div>

            <h2>POLE VAULT<br>LOGBOOK</h2>

            <p class="logbook-desc">
              As a collegiate vaulter, I ritually wrote down everything regarding my vault during a practice or competition.
              This included the pole I was jumping with, where I ran from on the runway, what height or drill I was attempting, and more.
            </p>
            <p class="logbook-desc">
              I created this custom journal for pole vaulters to track every mechanical detail of their vault, capture goals, and reflect on their training and performance.
            </p>
            <p class="logbook-desc">
              <em>A charitable donation is made with every purchase.</em>
            </p>

            <div class="logbook-specs">
              <div class="logbook-spec" v-for="spec in specs" :key="spec.key">
                <span class="spec-val">{{ spec.value }}</span>
                <span class="spec-key">{{ spec.key }}</span>
              </div>
            </div>

            <div class="actions-row">
              <a
                href="https://www.lulu.com/shop/elizabeth-composto-schweitzer/pole-vault-logbook/paperback/product-zm9v2dw.html"
                target="_blank"
                rel="noopener"
                class="btn btn-primary"
              >Order on Lulu</a>
              <a
                href="https://www.lulu.com/shop/elizabeth-composto-schweitzer/coaches-box/paperback/product-w4y2z2r.html?srsltid=AfmBOortPc2m89hD8aSj-_Ri9Tbnl-0Y9KAZKo9eCtkS8fESaYLpYmF9&page=1&pageSize=4"
                class="btn btn-outline"
              >Order the coach version</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
  data() {
    return {
      specs: [
        { value: '144', key: 'Pages' },
        { value: 'A5', key: 'Format' },
        { value: '$26.99', key: 'Price' },
        { value: 'Coil', key: 'Bound' },
      ],
    };
  },
};
