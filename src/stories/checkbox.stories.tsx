import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox } from "../components/checkbox";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Form/Checkbox",
  component: Checkbox,
  argTypes: {
    name: {
      table: {
        disable: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
    defaultChecked: {
      name: "Checked",
      control: { type: "boolean" },
      defaultValue: false,
    },
    disabled: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    textLabel: {
      name: "Label",
      control: { type: "text" },
    },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Example = Template.bind({});

Example.args = {
  name: "favorite-pet",
  id: "pet",
};
