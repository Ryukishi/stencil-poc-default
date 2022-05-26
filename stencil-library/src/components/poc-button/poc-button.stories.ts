export default {
    // this creates a ‘Components’ folder and a ‘MyComponent’ subfolder
    title: 'Components/PocButton',
    argTypes: {
        size: { control: { type: "select", options: ["small", "medium", "large"] },
      },
    }
};

const Template = (args) => `<poc-button variant="${args.variant}" size="${args.size}">Text</poc-button>`;

export const Primary = Template.bind({});
Primary.args = {
    variant: "primary"
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: "secondary"
};

export const Outlined = Template.bind({});
Outlined.args = {
    variant: "outlined"
};

export const Text = Template.bind({});
Text.args = {
    variant: "text"
};
