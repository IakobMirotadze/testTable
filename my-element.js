import {LitElement, html, css} from 'lit';

export class MyElement extends LitElement {
  static get styles() {
    return css`
      :host {
        display: grid;
        padding: 16px;
        max-width: 400px;
        grid-row-gap: 24px;
      }
      .table {
        display: grid;
        grid-template-columns: repeat(5,1fr);
      }
    `;
  }

  render() {
    return html`
      <h1>Hello ${this.list[this.list.length-1]?.name}!</h1>
      Name: <input @input='${this.setName}' value='${this.userObject.name}' >
      Lastname: <input @input='${this.setLastName}'  value='${this.userObject.lastName}'>
      Age: <input @input='${this.setAge}'  value='${this.userObject.age}'>
      Email: <input @input='${this.setEmail}'  value='${this.userObject.email}'>
      Phone: <input @input='${this.setPhone}'  value='${this.userObject.phone}'>
      <button class='submit' @click='${this.onSubmitFunction}'>Sumbit</button>
      
      <div class='table'>
        <div>Name</div>
        <div>Lastname</div>
        <div>age</div>
        <div>email</div>
        <div>phone</div>
        ${this.list.map((user)=> {
          return html`
            <div>${user.name}</div>
            <div>${user.lastName}</div>
            <div>${user.age}</div>
            <div>${user.email}</div>
            <div>${user.phone}</div>
          `
        })}
      </div>
    `;
  }

  // ინფუთებიდან ამოვიღო მონაცემები, (ინფუთებში ჩაწერილი მნიშვნელობები შევინახო)
  // საბმითის დროს მჭირდება რომ დავამატო სიაში ეს ჩემი მონაცემები,
  // // 1. მონაცემები წავიკითხო, 2. თუ სია არ არსებობს შევქმნა ახალი მონაცემით, თუ არსებობს, დავამატო,
  // სია უნდა გამოვაჩინო

  static get properties() {
    return {
      list: {type: Array}
    };
  }

  constructor() {
    super();
    this.count = 12;
    this.list= [];
    this.userObject= {};
  }

  setName(event) {
    var value = event.target.value;
    this.userObject.name = value
  }

  setLastName(event) {
    var value = event.target.value;
    this.userObject.lastName = value
  }

  setAge(event) {
    var value = event.target.value;
    this.userObject.age = value
  }

  setEmail(event) {
    var value = event.target.value;
    this.userObject.email = value
  }

  setPhone(event) {
    var value = event.target.value;
    this.userObject.phone = value
  }

  onSubmitFunction(){
    var newObject = {...this.userObject};
    this.userObject = {}
    this.list = [...this.list, newObject]
  }
}

window.customElements.define('my-element', MyElement);
