import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ToolTip from '../components/ToolTip';

const meta: Meta<typeof ToolTip> = {
    title: 'FO/ToolTip',
    component: ToolTip,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        position: {
            control: { type: 'select', options: ['top', 'bottom', 'left', 'right'] },
        },
        delay: {
            control: { type: 'number' },
        },
        content: {
            control: { type: 'text' },
        },
        theme: {
            control: { type: 'select', options: ['primary', 'secondary'] },
        },
        size: {
            control: { type: 'select', options: ['small', 'medium'] },
        },
        showIcon: {
            control: { type: 'boolean' },
        },
        children: {
            control: false, // Children are not controlled via Storybook
        },
    },
};

export default meta;
type Story = StoryObj<typeof ToolTip>;

// Default story with basic configuration
export const Default: Story = {
    args: {
        content: 'This is a tooltip',
        position: 'top',
        delay: 300,
        theme: 'primary',
        size: 'medium',
        showIcon: true,
    },
};

// Story demonstrating the secondary theme
export const SecondaryTheme: Story = {
    args: {
        content: 'This is a secondary themed tooltip',
        position: 'bottom',
        delay: 300,
        theme: 'secondary',
        size: 'medium',
        showIcon: true,
    },
};

// Story for different tooltip sizes
export const SmallSize: Story = {
    args: {
        content: 'This is a small-sized tooltip',
        position: 'left',
        delay: 300,
        theme: 'secondary',
        size: 'small',
        showIcon: true,
    },
};

// Story without an icon
export const WithoutIcon: Story = {
    args: {
        content: 'This is a tooltip without an icon',
        position: 'top',
        delay: 300,
        theme: 'primary',
        size: 'medium',
        showIcon: false,
    },
};
