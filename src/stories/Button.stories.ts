import type { Meta, StoryObj } from '@storybook/react';
import Button from '../components/Button';

const meta: Meta<typeof Button> = {
  title: 'FO/MatrixButton',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    theme: {
      control: { type: "select", options: ["primary", "secondary"] },
    },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    loading: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  }
}

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: "Click me",
    theme: "primary",
    size: "medium",
    disabled: false,
    loading: false,
  },
}

export const Disabled: Story = {
  args: {
    label: "Disabled",
    theme: "primary",
    size: "medium",
    disabled: true,
  }
}

export const Loading: Story = {
  args: {
    label: "Loading",
    theme: "primary",
    size: "medium",
    loading: true
  }
}

export const Primary: Story = {
  args: {
    label: "Primary",
    theme: "primary",
    size: "medium",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary",
    theme: "secondary",
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    label: "Large",
    theme: "primary",
    size: "large",
  },
};

export const Medium: Story = {
  args: {
    label: "Medium",
    theme: "primary",
    size: "medium",
  },
};

export const Small: Story = {
  args: {
    label: "Small",
    theme: "primary",
    size: "small",
  },
};