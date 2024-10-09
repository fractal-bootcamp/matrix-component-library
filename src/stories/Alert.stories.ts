import type { Meta, StoryObj } from '@storybook/react';

import Alert from "../components/Alert";

const meta = {
  component: Alert,
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Warning: Story = {
  args: {
    mode: "Error"
  },
};

export const Info: Story = {
  args: {
    mode: 'Info'
  },
};

export const Error: Story = {
  args: {
    mode: 'Error'
  },
};

export const Success: Story = {
  args: {
    mode: "Error"
  },
};
