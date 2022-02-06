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
      <div class="container" @dragover=${this.onDragOver} @drop=${this.onDrop}>
        <p>Drop here</p>
      </div>
      <elbow-drag name="drag-1"></elbow-drag>
    `;
  }

  onDragOver(e) {
    e.preventDefault();
  }

  onDrop(e) {
    const id = e.dataTransfer.getData('text');
    console.log(id);
    const draggableElement = document.getElementById(id);
    console.log(draggableElement);
    const dropzone = e.target;
    dropzone.appendChild(draggableElement);
    e.dataTransfer.clearData();
  }
}
