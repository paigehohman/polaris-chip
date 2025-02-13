import { LitElement, html, css } from "lit";

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {
  static get tag() {
    return "my-card";
  }

  constructor() {
    super();
    this.title = "my-card";
    this.img = "";
    this.description = "";
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
      }

      :host([fancy]) .card {
        display: block;
        background-color: blue;
        color: white;
        box-shadow: 10px 5px 5px black;
      }
      h1 {
        color: white;
        font-size: 40px;
        text-align: center;
      }

      p {
        color: white;
        font-size: 18px;
        text-align: center;
      }

      img {
        height: 400px;
        width: 400px;
        margin: auto;
      }

      .card {
        background-color: gray;
        max-width: 400px;
        height: 625px;
        padding: 20px;
        margin: 10px;
        border: solid yellow;
        border-width: 10px;
        border-radius: 10px;
        display: inline-block;
        position: relative;
        overflow: hidden;
      }

      button {
        padding: 20px;
        color: #808080;
        border-radius: 100px;
        border-color: yellow;
        border-width: 10px;
        font-size: 20px;
        font-weight: bold;
        margin-left: 60px;
      }

      button:hover {
        background-color: blue;
      }

      a {
        text-decoration: none;
        color: white;
      }

      .details_button {
        background-color: gray;
        padding: 10px 100px;
      }

      @media (min-width: 800px), (max-width: 500px) {
        .details_button {
          display: none;
        }
      }

      @media (max-width: 500px) {
        .card {
          width: 100%;
          margin: 10px;
          height: auto;
          padding: 10px 30px 20px 10px;
        }

        img {
          max-width: 400px;
          height: 200px;
          align-items: center;
          margin: auto;
        }

        h1 {
          color: white;
          font-size: 40px;
          margin: auto;
        }

        p {
          color: white;
          font-size: 18px;
          margin: auto;
        }
      }

      details summary {
        text-align: left;
        font-size: 20px;
        padding: 8px 0;
      }

      details[open] summary {
        font-weight: bold;
      }

      details div {
        border: 2px solid black;
        text-align: left;
        padding: 8px;
        height: 70px;
        overflow-y: auto;
        max-height: 100px;
        position: auto;
        bottom: 10px;
      }
    `;
  }

  render() {
    return html`
    <div class="card">

      <h1>${this.title}</h1>
      <img src=${this.img}>
  <details ?open="${this.fancy}" @toggle="${this.openChanged}">
  <summary>Description</summary>
  <div>
    <slot>${this.description}</slot>
  </div>
</details>
      <button class="details_button">
        <a href="https://hax.psu.edu" >Details>
      </button>
        </div>
      </div>`;
  }

  // put this anywhere on the MyCard class; just above render() is probably good
  openChanged(e) {
    console.log(e);
    if (e.target.getAttribute("open") !== null) {
      this.fancy = true;
    } else {
      this.fancy = false;
    }
  }

  static get properties() {
    return {
      fancy: { type: Boolean, reflect: true },
      title: { type: String },
      img: { type: String },
      description: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
