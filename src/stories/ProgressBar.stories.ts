import type { Meta, StoryObj } from "@storybook/react";
import ProgressBar from "../components/ProgressBar";

const meta = {
	title: "ProgressBar",
	component: ProgressBar,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		progress: 60,
		striped: true,
		color: "green",
	},
};
