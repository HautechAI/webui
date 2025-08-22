# TextArea

## Purpose

Multi-line text input component with resizing capabilities, icon support, and validation states.

## Installation

```bash
# pnpm (recommended)
pnpm add @hautechai/webui.textarea

# npm
npm install @hautechai/webui.textarea

# yarn
yarn add @hautechai/webui.textarea
```

## Parameters

| Parameter          | Type                                    | Description                                                                |
| ------------------ | --------------------------------------- | -------------------------------------------------------------------------- |
| className          | string                                  | Optional CSS class name for custom styling                                 |
| value              | string                                  | Optional controlled value for the textarea                                 |
| placeholder        | string                                  | Optional placeholder text displayed when textarea is empty                 |
| disabled           | boolean                                 | When true, disables textarea interaction and applies disabled styling      |
| onChange           | ChangeEventHandler<HTMLTextAreaElement> | Optional callback function triggered when textarea content changes         |
| leadingIcon        | React.ReactNode                         | Optional icon displayed at the beginning of the textarea                   |
| trailingIcon       | React.ReactNode                         | Optional icon displayed at the end of the textarea                         |
| hasError           | boolean                                 | When true, applies error styling to indicate validation failure            |
| variation          | 'filled' \| 'outlined'                  | Optional visual style variant (defaults to 'filled')                       |
| minRows            | number                                  | Optional minimum number of rows for the textarea (defaults to 4)           |
| maxRows            | number                                  | Optional maximum number of rows for the textarea                           |
| actionButton       | React.ReactNode                         | Optional action button element to display alongside or inside the textarea |
| actionButtonInside | boolean                                 | When true, positions the action button inside the textarea container       |

## Usage Example

```tsx
<TextArea
    placeholder="Enter your message..."
    value={message}
    onChange={handleMessageChange}
    leadingIcon={<MessageIcon />}
    hasError={!!messageError}
    disabled={isSubmitting}
    actionButton={<Button label="Send" onClick={handleSend} />}
    actionButtonInside={false}
/>
```
