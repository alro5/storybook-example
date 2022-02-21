import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Radio } from "../components/src/radio";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Form/Radio",
  component: Radio,
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
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Example = Template.bind({});

Example.args = {
  name: "radio-1",
  id: "radio-grp",
};
