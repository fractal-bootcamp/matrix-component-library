import type { Meta, StoryObj } from '@storybook/react';
import Button from '../components/Button';

const meta: Meta<typeof Button> = {
  title: 'FO/MatrixButton',
  component: Button,
  parameters: {
    layout: 'centered',
  },
}

export default meta;
type Story = StoryObj<typeof Button>;

export const WithButtonContent: Story = {
  args: {
    label: "Button",
    primary: true,
    size: "medium",
    onClick() {
      alert(`Clicked !`)
    },
  },
}

export const Primary: Story = {
  args: {
    label: "Primary",
    primary: true,
    size: "medium"
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary",
    primary: false,
    size: "medium"
  },
};

export const Large: Story = {
  args: {
    label: "Large",
    primary: true,
    size: "large"
  },
};

export const Medium: Story = {
  args: {
    label: "Medium",
    primary: true,
    size: "medium"
  },
};

export const Small: Story = {
  args: {
    label: "Small",
    primary: true,
    size: "small"
  },
};