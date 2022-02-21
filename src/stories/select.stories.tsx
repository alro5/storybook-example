import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Select } from "../components/src/select";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Form/Select",
  component: Select,
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
    options: {
      table: {
        disable: true,
      },
    },
    errors: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
  <Select {...args} options={["Value 1", "Value 2", "Value 3"]} />
);

export const Example = Template.bind({});
