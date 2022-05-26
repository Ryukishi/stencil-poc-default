export default {
    title: 'Components/PocInputfield',
};

const Template = (args) => `<poc-inputfield placeholder="${args.placeholder}"></poc-inputfield>`;

export const Standard = Template.bind({});
Standard.args = {
    placeholder: "Enter text"
};