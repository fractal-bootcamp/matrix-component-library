import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Accordion from '../components/Accordion';

const meta: Meta<typeof Accordion> = {
    title: 'FO/Accordion',
    component: Accordion,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        theme: {
            control: { type: 'select', options: ['primary', 'secondary'] },
        },
        size: {
            control: { type: 'select', options: ['small', 'medium', 'large'] },
        },
        allowMultiple: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

// Define the Default story
export const Default: Story = {
    args: {
        items: [
            {
                header: 'Section 1',
                content: <p>This is the content for section 1.</p>,
            },
            {
                header: 'Section 2',
                content: <p>This is the content for section 2.</p>,
            },
            {
                header: 'Section 3',
                content: (
                    <Accordion
                        items={[
                            {
                                header: 'Nested Section 1',
                                content: <p>This is nested content for section 1.</p>,
                            },
                            {
                                header: 'Nested Section 2',
                                content: <p>This is nested content for section 2.</p>,
                            },
                        ]}
                        allowMultiple={true}
                        theme="secondary"
                        size="small"
                    />
                ),
            },
        ],
        allowMultiple: false,
        theme: 'primary',
        size: 'medium',
    },
};
