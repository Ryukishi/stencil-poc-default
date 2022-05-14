import { newSpecPage } from '@stencil/core/testing';
import { PocButton } from '../poc-button';

describe('poc-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PocButton],
      html: `<poc-button></poc-button>`,
    });
    expect(page.root).toEqualHtml(`
      <poc-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </poc-button>
    `);
  });
});
