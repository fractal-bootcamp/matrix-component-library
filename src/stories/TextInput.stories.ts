import type { Meta, StoryObj } from '@storybook/react';

import TextInput from "../components/TextInput";

const meta = {
  component: TextInput,
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Enabled: Story = {
  args: {
    disabled: false
  },
};

export const Disabled: Story = {
  args: {
    disabled: true
  },
};

export const Error: Story = {
  args: {
    error: true

  },
};

export const Success: Story = {
  args: {
    error: false
  },
};
