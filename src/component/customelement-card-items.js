class CustomElementCardItem extends HTMLElement {
    connectedCallback() {
        this.src = this.getAttribute("src") || null;
        this.caption = this.getAttribute("caption") || null;
        this.desc = this.getAttribute("desc") || null;

        this.innerHTML = `
            <div class="card" style="height:100%">
                <div class="card-body">
                    <img src="${this.src}" alt="" style="width: 100%;height: 150px;object-fit: cover;">
                    <h5 class="card-title mt-3">${this.caption}</h5>
                    <P>${this.desc}</P>
                </div>
            </div>
        `;
    }
}
customElements.define("customelement-card-item", CustomElementCardItem);