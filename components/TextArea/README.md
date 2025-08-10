# TextArea

## Purpose
Multi-line text input component with resizing capabilities, icon support, and validation states.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| className | string | Optional CSS class name for custom styling |
| value | string | Optional controlled value for the textarea |
| placeholder | string | Optional placeholder text displayed when textarea is empty |
| disabled | boolean | When true, disables textarea interaction and applies disabled styling |
| onChange | ChangeEventHandler<HTMLTextAreaElement> | Optional callback function triggered when textarea content changes |
| leadingIcon | React.ReactNode | Optional icon displayed at the beginning of the textarea |
| trailingIcon | React.ReactNode | Optional icon displayed at the end of the textarea |
| hasError | boolean | When true, applies error styling to indicate validation failure |

## Usage Example
```tsx
<TextArea 
  placeholder="Enter your message..."
  value={message}
  onChange={handleMessageChange}
  leadingIcon={<MessageIcon />}
  hasError={!!messageError}
  disabled={isSubmitting}
/>
```