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
    this.bgColor = "#000000";
    this.description = "";
  }

  static get styles() {
    return css`
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
        max-width: 300px;
        margin-left: 50px;
      }

      .card {
        background-color: black;
        width: 400px;
        padding: 20px;
        margin: auto;
        border: solid yellow;
        border-width: 10px;
        border-radius: 10px;
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
          width: 100px;
          margin: 10px;
          padding: 10px 30px 20px 10px;
        }
        img {
          width: 100%;
          padding: 10px;
        }
      }

      :host {
        display: block;
      }
    `;
  }

  render() {
    return html`
    <div class="card">
      <h1>${this.title}</h1>
      <img src=${this.img}>
      <p>${this.description}</p>
      <button class="details_button">
        <a href="https://hax.psu.edu" >Details>
      </button>
        </div>
  
      
      
      </div>`;
  }

  static get properties() {
    return {
      title: { type: String },
      img: { type: String },
      description: { type: String },
      bgColor: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
