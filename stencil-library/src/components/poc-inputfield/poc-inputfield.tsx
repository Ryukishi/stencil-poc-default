import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'poc-inputfield',
  styleUrl: 'poc-inputfield.scss',
  shadow: true,
})
export class PocInputfield {
  /**
   * example text for user input
   * @returns the example text
   */
  @Prop() placeholder: string = 'Enter text';
  
  textInput: HTMLInputElement;

  updateValue = (event: Event) => {
    event.preventDefault;

    this.inputValue.emit(this.textInput.value);
  }

  @Event({bubbles:true, composed:true}) inputValue: EventEmitter<string>;

  render() {
    return (
      <Host>
        <label class={`custom-field`}>
          <input type="text" required ref={(el) => this.textInput = el as HTMLInputElement} onChange={this.updateValue}></input>
          <span class={`input-placeholder`}>{this.placeholder}</span>
        </label>
      </Host>
    );
  }

}
