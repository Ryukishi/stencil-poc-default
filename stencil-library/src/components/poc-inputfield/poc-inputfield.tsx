import { Component, Host, h, Prop, Event, EventEmitter, Watch } from '@stencil/core';

@Component({
  tag: 'poc-inputfield',
  styleUrl: 'poc-inputfield.scss',
  shadow: true,
})
export class PocInputfield {
  textInput: HTMLInputElement;

  /**
   * example text for user input
   * @returns the example text
   */
  @Prop() placeholder: string = 'Enter text';

  /**
   * boolean check wether the input fields need to be reset
   * @returns the clear boolean
   */
  @Prop() clear: boolean = false;

  /**
   * clears the input values when clear = true
   */
  @Watch('clear')
  onBoolChanged() {
    this.textInput.value = "";
  }
  
  /**
   * change emitter
   * @returns the emit to notify of a changed value
   */
  updateValue = () => {
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
