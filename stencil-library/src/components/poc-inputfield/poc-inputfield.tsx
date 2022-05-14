import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'poc-inputfield',
  styleUrl: 'poc-inputfield.css',
  shadow: true,
})
export class PocInputfield {
  /**
   * example text for user input
   * @returns the example text
   */
  @Prop() placeholder: string = 'Enter text'; 

  render() {
    return (
      <Host>
        <label class={`custom-field`}>
          <input type="text" required></input>
          <span class={`input-placeholder`}>{this.placeholder}</span>
        </label>
      </Host>
    );
  }

}
