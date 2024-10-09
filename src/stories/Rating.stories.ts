import type { Meta, StoryObj } from '@storybook/react';

import Rating from "../components/Rating";

const meta = {
  component: Rating,
} satisfies Meta<typeof Rating>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Enabled: Story = {
  args: {
    readonly: false
  },
};

export const Disabled: Story = {
  args: {
    readonly: true
  },
};