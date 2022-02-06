import { html, css, LitElement } from 'lit';
import './ElbowDrag.js';

export class ElbowDrop extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--elbow-drop-text-color, #000);
      }
      .container {
        background-color: #707070;
        color: #ffffff;
        padding: 16px;
        margin-bottom: 48px;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <div class="container">
        <p>Drop here</p>
      </div>
      <elbow-drag></elbow-drag>
    `;
  }
}
