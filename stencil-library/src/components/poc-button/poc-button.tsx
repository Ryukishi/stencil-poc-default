import { Component, h, Host, Prop, Listen, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'poc-button',
  styleUrl: 'poc-button.scss',
  shadow: true,
})
export class PocButton {
  /**
   * primary | secondary
   * @returns the button variant
   */
  @Prop() variant: 'primary' | 'secondary' | 'outlined' | 'text' = 'primary';

  /**
   * standard | submit
   * @returns the button type
   */
  @Prop() type: 'standard' | 'submit' = 'standard';

  /**
   * small | medium | large
   * @returns the button size
   */
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * click emitter
   * @returns the emit to notify the project of a buttonpress
   */
  @Listen('click', {capture: true})
  handleClick() {
    this.btnClick.emit();
  }
  
  @Event({bubbles:true, composed:true}) btnClick: EventEmitter<any>;

  render() {
    return (
      <Host>
      <button class={`btn btn-${this.variant} ${this.type} ${this.size}`}>
        <slot></slot>
      </button>
      </Host>
    );
  }
}
