import { Meta, StoryFn } from "@storybook/react";
import Button from "./Button";

export default {
   title: "UI/Button",
   component: Button,
   args: {
      children: "Click Me",
   },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
   children: "Default Button",
   variant: "primary",
};

export const WithAction = Template.bind({});
WithAction.args = {
   children: "Action Button",
   onClick: () => alert("Button clicked!"),
};
