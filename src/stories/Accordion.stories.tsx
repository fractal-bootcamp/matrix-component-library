import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SingleAccordion, NestedAccordion } from '../components/Accordion';

const meta: Meta = {
    title: 'FO/Accordion',
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
type SingleStory = StoryObj<typeof SingleAccordion>;
type NestedStory = StoryObj<typeof NestedAccordion>;

// Define the SingleAccordion story
export const SingleAccordionStory: SingleStory = {
    name: 'Single Accordion',
    args: {
        items: [
            { header: 'Single Section 1', content: <p>This is the content for section 1.</p> },
            { header: 'Single Section 2', content: <p>This is the content for section 2.</p> },
            { header: 'Single Section 3', content: <p>This is the content for section 3.</p> },
        ],
        theme: 'primary',
        size: 'medium',
    },
    render: (args) => <SingleAccordion {...args} />, // Correctly passing all args using the spread operator
};

// Define the NestedAccordion story
export const NestedAccordionStory: NestedStory = {
    name: 'Nested Accordion',
    args: {
        items: [
            {
                header: 'Parent Section 1',
                content: <p>This is the content for the parent section 1.</p>,
            },
            {
                header: 'Parent Section 2',
                content: <p>This is the content for the parent section 2.</p>,
            },
            {
                header: 'Parent Section 3',
                content: (
                    <NestedAccordion
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
        allowMultiple: true,
        theme: 'primary',
        size: 'medium',
    },
    render: (args) => <NestedAccordion {...args} />, // Correctly passing all args using the spread operator
};
