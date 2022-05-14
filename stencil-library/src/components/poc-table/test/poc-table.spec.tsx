import { newSpecPage } from '@stencil/core/testing';
import { PocTable } from '../poc-table';

describe('poc-table', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PocTable],
      html: `<poc-table></poc-table>`,
    });
    expect(page.root).toEqualHtml(`
      <poc-table>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </poc-table>
    `);
  });
});
