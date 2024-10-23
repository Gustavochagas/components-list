import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs']
};
 
export default meta;
type Story = StoryObj<typeof Button>;
 
export const Primary: Story = {
  args: {
    variant: "primary",
  },
  render: ({ variant }) => <Button variant={variant}>This is a test</Button>
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
  render: ({ variant }) =><Button variant={variant}>This is a test</Button>
};