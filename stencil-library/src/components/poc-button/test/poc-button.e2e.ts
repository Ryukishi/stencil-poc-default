import { newE2EPage } from '@stencil/core/testing';

describe('poc-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<poc-button></poc-button>');

    const element = await page.find('poc-button');
    expect(element).toHaveClass('hydrated');
  });
});
