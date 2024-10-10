import type { Meta, StoryObj } from '@storybook/react';
import DropDown from '../components/DropDown';

const meta: Meta<typeof DropDown> = {
    title: 'FO/DropDown',
    component: DropDown,
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
        onSelect: { action: "selected" },
        customOptionRenderer: { control: false },
    },
}

export default meta;
type Story = StoryObj<typeof DropDown>;

export const SingleSelect: Story = {
    args: {
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        placeholder: "Select option",
        theme: "primary",
        size: "medium",
        multiple: false,
        disabled: false,
    },
    play: async ({ canvasElement }) => {
        const dropdown = canvasElement.querySelector('[role="combobox"]') as HTMLDivElement
        if (dropdown) {
            dropdown.focus()
            await new Promise(r => setTimeout(r, 500))

            dropdown.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
            await new Promise(r => setTimeout(r, 500));

            dropdown.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowDown" }))
            await new Promise(r => setTimeout(r, 500))

            dropdown.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowDown" }))
            await new Promise(r => setTimeout(r, 500))

            dropdown.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }))
        }
    }
}

export const MultiSelect: Story = {
    args: {
        options: ["Option A", "Option B", "Option C", "Option D"],
        placeholder: "Select options",
        theme: "secondary",
        size: "large",
        multiple: true,
        disabled: false,
    },
}

export const NoOptionsToSelect: Story = {
    args: {
        options: [],
        placeholder: "Drop Down",
        theme: "primary",
        size: "medium"
    }
}

export const Searchable: Story = {
    args: {
        options: ['Custom 1', 'Custom 2', 'Custom 3'],
        placeholder: "Search options",
        theme: 'primary',
        size: "medium",
    }
}

export const Disabled: Story = {
    args: {
        options: ['Option 1', 'Option 2', 'Option 3'],
        placeholder: "Disabled dropdown \\\\!!//",
        theme: 'secondary',
        size: 'medium',
        disabled: true,
    },
};