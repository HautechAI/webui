# EditableText

## Purpose
A component that displays text which can be switched to edit mode by double-clicking. In view mode, it renders as styled typography, and in edit mode, it becomes an input field for text editing.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| text | string | The text content to display or edit |
| mode | 'view' \| 'edit' | Controls whether the component is in display or editing mode |
| textStyle | 'medium-regular' \| 'medium-emphasized' \| 'small-regular' \| 'small-emphasized' | Typography style applied in view mode (optional, defaults to 'medium-regular') |
| onStartEditing | () => void | Callback triggered when double-clicking in view mode (optional) |
| onChange | (value: string) => void | Callback triggered when the text content changes in edit mode (optional) |
| onFinishEditing | () => void | Callback triggered when clicking outside the input or pressing Enter in edit mode (optional) |

## Usage Example
```tsx
const [text, setText] = useState('Click twice to edit');
const [mode, setMode] = useState<'view' | 'edit'>('view');

<EditableText
    text={text}
    mode={mode}
    textStyle="medium-regular"
    onStartEditing={() => setMode('edit')}
    onChange={setText}
    onFinishEditing={() => setMode('view')}
/>
```