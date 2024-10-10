## Matrix Component Library Documentation

# 🚀 Matrix Component Library

A modern and customizable component library built with React, TypeScript, and Framer Motion for smooth animations. This library includes components such as Accordions, Buttons, Alerts, DropDowns, Tooltips, and more, designed to provide a sleek and consistent UI for your applications.

## 📦 Installation

To install the library, run:

```
npm install my-component-library ////
```

## 🛠️ Usage

Here's a quick guide on how to use the components in your React project.

### 1. Accordion

**Single Accordion**
A collapsible component that displays content when the user clicks on the header.

```jsx
import { SingleAccordion } from 'my-component-library';

<SingleAccordion
    items={[
        { header: 'Section 1', content: <p>This is the content for section 1.</p> },
        { header: 'Section 2', content: <p>This is the content for section 2.</p> },
        { header: 'Section 3', content: <p>This is the content for section 3.</p> },
    ]}
    theme="primary"
    size="medium"
/>
```

![Single Accordion Example](images/single-accordion.png)

**Nested Accordion**
Create nested accordions for more complex structures.

```jsx
import { NestedAccordion } from 'my-component-library';

<NestedAccordion
    items={[
        {
            header: 'Main Section 1',
            content: (
                <NestedAccordion
                    items={[
                        { header: 'Sub Section 1', content: <p>Nested content 1</p> },
                        { header: 'Sub Section 2', content: <p>Nested content 2</p> },
                    ]}
                />
            ),
        },
        { header: 'Main Section 2', content: <p>This is the content for section 2.</p> },
    ]}
    theme="secondary"
    size="small"
    allowMultiple={true}
/>
```

![Nested Accordion Example](images/nested-accordion.png)

### 2. Button

A customizable button with animations.

```jsx
import { Button } from 'my-component-library';

<Button
    label="Click Me"
    theme="primary"
    size="large"
    onClick={() => alert('Button clicked!')}
/>
```

![Button Example](images/button.png)

### 3. Alert

Display messages such as warnings, info, errors, or success alerts.

```jsx
import { Alert } from 'my-component-library';

<Alert mode="Success" message="This is a success alert!" timeout={3000} />
```

![Alert Example](images/alert.png)

### 4. DropDown

A versatile dropdown component with search and multi-select functionality.

```jsx
import { DropDown } from 'my-component-library';

<DropDown
    options={['Option 1', 'Option 2', 'Option 3']}
    placeholder="Select an option"
    multiple={true}
    onSelect={(value) => console.log('Selected:', value)}
    theme="secondary"
    size="medium"
/>
```

![DropDown Example](images/dropdown.png)

### 5. Tooltip

A simple tooltip component to display helpful information when hovering over an element.

```jsx
import { ToolTip } from 'my-component-library';

<ToolTip content="This is a tooltip" position="top" alwaysVisible={true}>
    <button>Hover over me</button>
</ToolTip>
```

![Tooltip Example](images/tooltip.png)

### 6. FileUploader

An interactive file uploader with drag-and-drop support.

```jsx
import { FileUploader } from 'my-component-library';

<FileUploader submitButtonText="Upload Files" supportedTypes={['jpg', 'png']} />
```

![FileUploader Example](images/file-uploader.png)

### 7. ProgressBar

A visual representation of a task's progress.

```jsx
import { ProgressBar } from 'my-component-library';

<ProgressBar progress={60} striped={true} color="green" />
```

![ProgressBar Example](images/progress-bar.png)

### 8. Rating

A rating component using stars or hearts.

```jsx
import { Rating } from 'my-component-library';

<Rating icon="star" maxrating={5} readonly={false} />
```

![Rating Example](images/rating.png)

### 9. SkeletonScreen

A dynamic skeleton screen for loading effects.

```jsx
import { SkeletonScreen } from 'my-component-library';

<SkeletonScreen letters="Loading..." dropSpeed={100} color="green" />
```

![SkeletonScreen Example](images/skeleton-screen.png)

### 10. TextInput

A text input field with validation styles.

```jsx
import { TextInput } from 'my-component-library';

<TextInput
    placeholder="Enter your name"
    disabled={false}
    errorHandler={(value) => value.length < 3}
    changeHandler={(value) => console.log('Changed:', value)}
/>
```

![TextInput Example](images/text-input.png)

### 11. Timeline

Display events in a vertical or horizontal timeline.

```jsx
import { Timeline } from 'my-component-library';

<Timeline
    orientation="vertical"
    color="green"
    events={[
        { year: 2020, title: 'Event 1', description: 'Description of event 1' },
        { year: 2021, title: 'Event 2', description: 'Description of event 2' },
    ]}
/>
```

![Timeline Example](images/timeline.png)

## 📄 Props

For detailed information about the props of each component, please refer to the [API Documentation](https://github.com/yourusername/your-component-library/wiki).

## 🛠️ Customization

### Themes

- **primary**: Dark background with green accents.
- **secondary**: Green background with dark accents.

### Sizes

- **small**: Compact design.
- **medium**: Balanced design (default).
- **large**: Spacious design for better readability.

## 📝 License

This project is licensed under the MIT License. See the [LICENSE] file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/fractal-bootcamp/matrix-component-library/issues).


---