class MyGradientBackground extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
        const gradient = this.getAttribute('gradient');
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(${gradient});
                }

                .after {
                    content: "";
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(${gradient});
                    opacity: 0;
                    transition: opacity 0.6s ease-in-out;
                }
            </style>
            <div class="after"></div>
        `;
        this.afterEle = this.shadowRoot.querySelector(".after");
        // :before pseudo-elements cannot be manipulated with JavaScript
        // therefore, we are using an .after element
    }

    static get observedAttributes() {
        return ['gradient']
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue && newValue && oldValue !== newValue) {
            this.afterEle.style.background = `linear-gradient(${newValue})`;
            this.afterEle.style.opacity = '1';

            this.afterEle.addEventListener("transitionend", this.handleTransitionEnd);
        }
    }

    handleTransitionEnd() {
        this.style.background = `linear-gradient(${this.getAttribute("gradient")})`;
        this.afterEle.style.opacity = '0';

        this.afterEle.removeEventListener("transitionend", this.handleTransitionEnd);
    }
}

module.exports = MyGradientBackground;
