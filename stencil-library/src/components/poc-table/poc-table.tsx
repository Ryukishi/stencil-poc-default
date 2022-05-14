import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'poc-table',
  styleUrl: 'poc-table.css',
  shadow: true,
})
export class PocTable {
  /**
   * data to be displayed in the table
   * @returns data in json format
   */
   @Prop() data: any[];

  /**
   * headers to be displayed in the first row
   * @returns first row headers
   */
  @Prop() verticalheaders: any;

  /**
   * headers to be displayed in the first column
   * @returns first column headers
   */
  @Prop() horizontalheaders: any;

  /**
   * removes the first header from the list and places into variable
   * @returns the first header in the list
   */
  removeRenderedHeader() {
    let header = this.verticalheaders.shift();

    return header;
  }
  
  render() {
    return (
      <Host>
        <table>
          <thead class="thead-blue">
            <tr>

              {this.verticalheaders ? <tr></tr> : undefined}
              {this.horizontalheaders ? this.horizontalheaders.map(header =>
                <th class="th-header">{header}</th>) : undefined}

            </tr>
          </thead>
          <tbody>
            
            {this.data.map((object, i) => {
              return [
                <tr class="row-tint" key={i}>

                  {this.verticalheaders ?
                  <th class="th-header">{this.removeRenderedHeader()}</th> : undefined}
                  {Object.keys(object).map(prop =>
                    <td class="td-prop">{object[prop]}</td>)}  

                </tr>
              ]
          })}
          </tbody>
        </table>
      </Host>
    );
  }

}
