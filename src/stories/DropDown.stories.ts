import type { Meta, StoryObj } from '@storybook/react';

import DropDown from '../components/DropDown';

const meta: Meta<typeof DropDown> = {
    title: 'FO/DropDown',
    component: DropDown,
    parameters: {
        layout: 'centered',
    },
}

export default meta;
type Story = StoryObj<typeof DropDown>;

export const WithDropDownContent: Story = {
    args: {

    },
}
