import { newE2EPage } from '@stencil/core/testing';

describe('poc-table', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<poc-table></poc-table>');

    const element = await page.find('poc-table');
    expect(element).toHaveClass('hydrated');
  });
});
