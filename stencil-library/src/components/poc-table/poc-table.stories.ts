
export default {
    title: 'Components/PocTable',
};

const Template = (args) => `<poc-table data="${args.data}" horizontalheaders="${args.horizontalheaders}"></poc-table>`;

export const HorizontalHeadersExample = Template.bind({});
HorizontalHeadersExample.args = {
    data: [{
        name: 'Johan',
        country: 'Netherlands',
        phone: '0635508221'
    }, {
        name: 'Klaas',
        country: 'Netherlands',
        phone: '0655278391'
    }],
    horizontalheaders: ['Name', 'Country', 'Phone no.']
};

// export const HorizontalHeadersExample = () => {
//     const data = [{
//         name: 'Johan',
//         country: 'Netherlands',
//         phone: '0635508221'
//     }, {
//         name: 'Klaas',
//         country: 'Netherlands',
//         phone: '0655278391'
//     }];
//     const horizontalheaders = ['Name', 'Country', 'Phone no.'];
//     return `<poc-table data="${data}" horizontalheaders="${horizontalheaders}"></poc-table>`;
// };