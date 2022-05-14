import { newSpecPage } from '@stencil/core/testing';
import { PocInputfield } from '../poc-inputfield';

describe('poc-inputfield', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PocInputfield],
      html: `<poc-inputfield></poc-inputfield>`,
    });
    expect(page.root).toEqualHtml(`
      <poc-inputfield>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </poc-inputfield>
    `);
  });
});
