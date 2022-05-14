import { NgModule } from '@angular/core';
import { defineCustomElements } from 'stencil-library/loader'
import { MyComponent, PocButton, PocTable, PocInputfield } from './stencil-generated/components';

defineCustomElements(window);

@NgModule({
  declarations: [MyComponent, PocButton, PocTable, PocInputfield],
  exports: [MyComponent, PocButton, PocTable, PocInputfield],
})
export class ComponentLibraryModule { }
