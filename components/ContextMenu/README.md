# ContextMenu

## Purpose

Right-click or interaction-triggered menu component with contextual actions and flexible presentation options.

## Parameters

| Parameter   | Type                    | Description                                                                          |
| ----------- | ----------------------- | ------------------------------------------------------------------------------------ |
| heading     | object                  | Optional heading configuration with data and optional badge string                   |
| menus       | ReactNode[]             | Optional array of menu content elements                                              |
| children    | React.ReactNode         | Required trigger element that activates the context menu                             |
| variation   | 'menu' \| 'bottomSheet' | Optional presentation style - popup menu or mobile bottom sheet (defaults to 'menu') |
| isLeftClick | boolean                 | When true, activates on left click instead of right click                            |

## Usage Example

```tsx
<ContextMenu
    heading={{ data: 'Actions', badge: '3' }}
    menus={[<MenuSection1 />, <MenuSection2 />]}
    variation="menu"
    isLeftClick={false}
>
    <ContentElement />
</ContextMenu>
```
