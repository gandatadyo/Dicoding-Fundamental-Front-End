class CustomElementCardNews extends HTMLElement {
    connectedCallback() {
        this.src = this.getAttribute("src") || null;
        this.caption = this.getAttribute("caption") || null;
        this.desc = this.getAttribute("desc") || null;

        this.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <img src="${this.src}"
                        style="width: 100%;height: auto;border-top-left-radius: 10px;border-top-right-radius: 10px;object-fit: cover;"
                        alt="">
                    <div style="padding: 10px 20px;">
                        <h3><b>${this.caption}</b></h3>
                        <P>${this.desc}</P>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define("customelement-card-news", CustomElementCardNews);