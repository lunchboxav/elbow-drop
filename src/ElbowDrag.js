import { LitElement, html, css } from 'lit';

export class ElbowDrag extends LitElement {
  static properties = {
    name: { type: String },
  };

  static get styles() {
    return css`
      .container {
        background-color: #dedede;
        width: 400px;
        padding: 8px;
      }
    `;
  }

  constructor() {
    super();
    this.identifier = 'eee';
    this.name = 'test';
  }

  render() {
    return html`
      <div
        id=${this.name}
        class="container"
        draggable="true"
        @dragstart=${this.onDragStart}
      >
        <p>Drag me ${this.name}</p>
      </div>
    `;
  }

  onDragStart(e) {
    //console.log(e.currentTarget);
    //console.log(e.target.id);
    e.dataTransfer.setData('text/plain', e.target.id);
    e.currentTarget.style.backgroundColor = 'yellow';
  }
}

customElements.define('elbow-drag', ElbowDrag);
