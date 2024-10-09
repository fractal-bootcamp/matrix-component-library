import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Button from '../../components/Button';

const meta: Meta<typeof Button> = {
  title: 'Example/MatrixButton',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    primary: true



  },
  args: { onClick: fn() },
}

export default meta;
type Story = StoryObj<typeof Button>;

export const WithSearchContent: Story = {
  args: {
    label: "Button",
    primary: true,
    size: "medium",
    onClick() {
      alert(`Clicked !`)
    },
  },
}