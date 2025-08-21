# EditableText

## Purpose

A component that displays text which can be switched to edit mode by double-clicking. In view mode, it renders as styled typography with automatic emphasis based on selected state, and in edit mode, it becomes a TextInput field for text editing.

## Installation

```bash
# pnpm (recommended)
pnpm add @hautechai/webui.editabletext

# npm
npm install @hautechai/webui.editabletext

# yarn
yarn add @hautechai/webui.editabletext
```

## Parameters

| Parameter       | Type                    | Description                                                                                  |
| --------------- | ----------------------- | -------------------------------------------------------------------------------------------- |
| text            | string                  | The text content to display or edit                                                          |
| mode            | 'view' \| 'edit'        | Controls whether the component is in display or editing mode                                 |
| size            | 'medium' \| 'small'     | Typography size variant (optional, defaults to 'medium')                                     |
| selected        | boolean                 | When true, applies emphasized typography styling (optional, defaults to false)               |
| onStartEditing  | () => void              | Callback triggered when double-clicking in view mode (optional)                              |
| onChange        | (value: string) => void | Callback triggered when the text content changes in edit mode (optional)                     |
| onFinishEditing | () => void              | Callback triggered when clicking outside the input or pressing Enter in edit mode (optional) |

## Usage Example

```tsx
const [text, setText] = useState('Click twice to edit');
const [mode, setMode] = useState<'view' | 'edit'>('view');

<EditableText
    text={text}
    mode={mode}
    size="medium"
    selected={false}
    onStartEditing={() => setMode('edit')}
    onChange={setText}
    onFinishEditing={() => setMode('view')}
/>;
```
