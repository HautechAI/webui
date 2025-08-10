# Menu

## Purpose
Dropdown menu container component for navigation or actions with selectable options and popover positioning.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| options | (MenuItemProps & { value?: string })[] | Required array of menu item configurations with labels and optional values |
| value | string | Optional controlled selected value |
| onChange | (value: string) => void | Optional callback function triggered when menu item is selected |
| trigger | () => React.ReactNode | Optional function returning the trigger element for the menu |
| contentPositions | PopoverProps['contentPositions'] | Optional positioning configuration for the menu popover |

## Usage Example
```tsx
<Menu 
  options={[
    { label: "Edit", value: "edit", leadingIcon: <EditIcon /> },
    { label: "Delete", value: "delete", leadingIcon: <DeleteIcon /> }
  ]}
  value={selectedAction}
  onChange={setSelectedAction}
  trigger={() => <Button label="Actions" />}
/>
```