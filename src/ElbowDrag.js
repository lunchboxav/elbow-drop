import { LitElement, html, css } from 'lit';

export class ElbowDrag extends LitElement {
  static get styles() {
    return css`
      .container {
        background-color: #dedede;
        width: 400px;
        padding: 8px;
      }
    `;
  }

  render() {
    return html`
      <div
        class="container"
        draggable="true"
        @dragstart=${this.onDragStart}
        @click=${this.onClick}
        @keyup=${this.onKeyup}
      >
        <p>Drag me</p>
      </div>
    `;
  }

  static onKeyup(e) {
    console.log(e.currentTarget);
  }

  static onClick(e) {
    console.log(e.currentTarget);
  }

  onDragStart(e) {
    console.log(e.currentTarget);
    e.dataTransfer.setData('text/plain', e.target.id);
    e.currentTarget.style.backgroundColor = 'yellow';
  }
}

customElements.define('elbow-drag', ElbowDrag);
