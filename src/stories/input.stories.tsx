import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "../components/input";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Form/Input",
  component: Input,
  argTypes: {
    type: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
    block: {
      control: { type: "boolean" },
      name: "Full width",
      defaultValue: false,
    },
    placeholder: {
      control: { type: "text" },
      name: "Placeholder",
      defaultValue: "Insert name",
    },
    name: {
      table: {
        disable: true,
      },
    },
    register: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Example = Template.bind({});
Example.args = {
  type: "text",
};
