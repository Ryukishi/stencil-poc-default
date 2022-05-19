import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Stencil-poc-default';
  
  tableItems: any;
  horizontalHeaders: any;
  verticalHeaders: any;
  
  firstColumn: string = "";
  secondColumn: string = "";
  thirdColumn: string = ""; 
  firstColumnInput: string = "";
  secondColumnInput: string = "";
  thirdColumnInput: string = "";

  showThirdInput: boolean = true;

  ngOnInit() {
    this.setTableExampleHorizontal();
    this.setHTMLInputAndPlaceholders();
  }

  setHTMLInputAndPlaceholders() {
    if (this.horizontalHeaders) {
      this.firstColumn = this.horizontalHeaders[0];
      this.secondColumn = this.horizontalHeaders[1];
      if (this.showThirdInput) {
        this.thirdColumn = this.horizontalHeaders[2];
      }
    }
  }

  setTableExampleHorizontal() {
    this.tableItems = [{
          name: 'Johan',
          country: 'Netherlands',
          phone: '0635508221'
      }, {
          name: 'Klaas',
          country: 'Netherlands',
          phone: '0655278391'
      }];

      this.horizontalHeaders = ['Name', 'Country', 'Phone no.'];
  }

  setTableExampleHorizontalVertical() {
    this.tableItems = [{
          may: '500000',
          june: '70000',
          july: '900000'
      }, {
          may: '550000',
          june: '800000',
          july: '1200000'
      }];

    this.horizontalHeaders = ['May', 'June', 'July'];
    this.verticalHeaders = ['Projected', 'Actual'];
  }

  insertIntoTable = (): void => {
    this.tableItems.push({
      name: this.firstColumnInput,
      country: this.secondColumnInput,
      phone: this.thirdColumnInput
    });
    
    let table = document.getElementById("poc-table");
    table?.setAttribute("data", this.tableItems);

    console.log(this.tableItems);
  }

  setFirstColumnInput(event: any): void {
    this.firstColumnInput = event.detail;
  }
  
  setSecondColumnInput(event: any): void {
    this.secondColumnInput = event.detail;
  }

  setThirdColumnInput(event: any): void {
    this.thirdColumnInput = event.detail;
  }
}
