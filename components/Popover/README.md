# Popover

## Purpose
Floating content container component positioned relative to trigger elements with flexible content and positioning.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| content | ({ close }: { close: () => void }) => ReactNode | Required function returning popover content with access to close function |
| contentPositions | PopoverPosition[] | Optional array of preferred positioning options for the popover |
| trigger | () => ReactNode | Required function returning the trigger element that activates the popover |

## Usage Example
```tsx
<Popover 
  content={({ close }) => (
    <div>
      <p>Popover content</p>
      <Button label="Close" onClick={close} />
    </div>
  )}
  contentPositions={['top', 'right', 'bottom', 'left']}
  trigger={() => <Button label="Open Popover" />}
/>
```