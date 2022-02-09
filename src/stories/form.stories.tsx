import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../components/button";
import Form from "../components/form";
import { Input } from "../components/input";
import { Select } from "../components/select";
import { StoryLayout } from "./story-layout";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Form/Form",
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
      table: {
        disable: true,
      },
    },
    placeholder: {
      table: {
        disable: true,
      },
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

const Template: ComponentStory<typeof Input> = (args) => {
  const onSubmit = (data: any) =>
    alert(`Form data retrieved: \n\n ${JSON.stringify(data)}`);

  const formDefaultValues = {};

  return (
    <StoryLayout width="narrow">
      <Form
        showResetButton={true}
        defaultValues={formDefaultValues}
        onSubmit={onSubmit}
      >
        <Input
          name="name"
          placeholder="Insert name"
          type="text"
          errors={{
            required: true,
            pattern: /^[a-zA-Z\u00C0-\u00FF ]*$/,
          }}
        />
        <Input
          name="phone"
          placeholder="Insert phone"
          type="tel"
          errors={{
            required: true,
            pattern: /^[0-9]*$/,
          }}
        />
        <Input
          name="email"
          placeholder="Insert email"
          type="email"
          errors={{
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          }}
        />
        <Select
          name="gender"
          options={["Male", "Female"]}
          errors={{
            required: true,
          }}
        />
        <Button primary label="Submit" type="submit" />
      </Form>
    </StoryLayout>
  );
};

export const Example = Template.bind({});
