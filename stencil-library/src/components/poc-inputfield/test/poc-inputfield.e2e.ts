import { newE2EPage } from '@stencil/core/testing';

describe('poc-inputfield', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<poc-inputfield></poc-inputfield>');

    const element = await page.find('poc-inputfield');
    expect(element).toHaveClass('hydrated');
  });
});
