# ButtonBase

## Purpose

Base button component providing common button functionality and styling foundation for other button components.

## Parameters

| Parameter | Type                                           | Description                                                         |
| --------- | ---------------------------------------------- | ------------------------------------------------------------------- |
| id        | string                                         | Optional identifier for the button element                          |
| className | string                                         | Optional CSS class name for custom styling                          |
| onClick   | ComponentProps<typeof StyledButton>['onClick'] | Optional click event handler function                               |
| disabled  | boolean                                        | When true, disables button interaction and applies disabled styling |
| stretch   | boolean                                        | When true, button expands to fill available width                   |
| children  | React.ReactNode                                | Content to be displayed within the button                           |

## Usage Example

```tsx
<ButtonBase onClick={handleClick} stretch={true} className="custom-button">
    Custom Button Content
</ButtonBase>
```
