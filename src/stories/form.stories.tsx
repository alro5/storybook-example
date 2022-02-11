import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../components/src/button";
import { Checkbox } from "../components/checkbox";
import Form from "../components/form";
import { Input } from "../components/input";
import { Radio } from "../components/radio";
import { RadioGroup } from "../components/radio-group";
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
    errors: {
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
          displayName="Name"
          placeholder="Insert name"
          type="text"
          errors={{
            required: true,
            pattern: /^[a-zA-Z\u00C0-\u00FF ]*$/,
          }}
        />
        <Input
          name="phone"
          displayName="Phone"
          placeholder="Insert phone"
          type="tel"
          errors={{
            required: true,
            pattern: /^[0-9]*$/,
          }}
        />
        <Input
          name="email"
          displayName="E-mail"
          placeholder="Insert e-mail"
          type="email"
          errors={{
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          }}
        />
        <Select
          name="gender"
          displayName="Gender"
          options={["Male", "Female"]}
          errors={{
            required: true,
            validate: (v) => v === "Male" || v === "Female",
          }}
        />
        <Checkbox
          errors={{
            required: true,
            validate: (v) => v === true,
          }}
          displayName="Accept news"
          name="accept-news"
          id="news"
          textLabel="Accept news"
        />
        <RadioGroup
          groupHeadline="Whats your favorite programming language?"
          name="favorite-programming-language"
          displayName="Programming language"
          options={[
            {
              value: "react",
              displayValue: "ReactJS",
            },
            {
              value: "vue",
              displayValue: "VueJS",
            },
          ]}
        />
      </Form>
    </StoryLayout>
  );
};

export const Example = Template.bind({});
