import type { Meta, StoryObj } from '@storybook/react';

import Rating from "../components/Rating";

const meta = {
  component: Rating,
} satisfies Meta<typeof Rating>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Warning: Story = {
  args: {
    mode: "Warning"
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
    mode: "Success"
  },
};
