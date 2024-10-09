import type { Meta, StoryObj } from "@storybook/react";
import FileUploader from "../components/FileUploader";

const meta = {
	title: "FileUploader",
	component: FileUploader,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof FileUploader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		submitButtonText: "Hello",
		supportedTypes: ["py", "ts"],
	},
};
