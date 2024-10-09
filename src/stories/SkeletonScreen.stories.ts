import type { Meta, StoryObj } from "@storybook/react";
import SkeletonScreen from "../components/SkeletonScreen";

const meta = {
	title: "SkeletonScreen",
	component: SkeletonScreen,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof SkeletonScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		letters: "01OCHAEIﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍｦｲｸｺｿﾁﾄﾉﾌﾔﾖﾙﾚﾛﾝ012345789",
	},
};
