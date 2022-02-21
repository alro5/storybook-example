import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "../components/src/input";
import { StoryLayout } from "./story-layout";

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
      description: "Should the input be full width?",
    },
    placeholder: {
      control: { type: "text" },
      name: "Placeholder",
      defaultValue: "Insert name",
      description: "Should the input have a placeholder text?",
    },
    name: {
      table: {
        disable: true,
      },
      defaultValue: "name",
    },
    register: {
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
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <StoryLayout width="narrow">
    <Input {...args} />
  </StoryLayout>
);

export const Example = Template.bind({});
Example.args = {
  type: "text",
};
