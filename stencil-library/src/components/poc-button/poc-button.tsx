import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'poc-button',
  styleUrl: 'poc-button.css',
  shadow: true,
})
export class PocButton {
  /**
   * primary | secondary
   * @returns the button variant
   */
  @Prop() variant: 'primary' | 'secondary' | 'outlined' | 'text' = 'primary';

  /**
   * button | submit
   * @returns the button type
   */
  @Prop() type: 'button' | 'submit' = 'button';

  /**
   * small | medium | large
   * @returns the button size
   */
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * event
   * @returns the event of the button
   */
   @Prop() event: any;

  render() {
    return (
      <Host>
      <button class={`btn btn-${this.variant} ${this.type} ${this.size}`} onClick={this.event}>
        <slot></slot>
      </button>
      </Host>
    );
  }

}
