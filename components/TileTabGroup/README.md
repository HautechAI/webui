# TileTabGroup

## Purpose
Tab container component using tile-based visual style for organizing content sections with visual tab indicators.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| children | React.ReactNode | Required tab content, typically TileTabItem components |
| value | string \| number | Optional controlled active tab identifier |
| onChange | (value: string \| number) => void | Optional callback function when tab changes |
| orientation | 'horizontal' \| 'vertical' | Optional tab layout direction |
| size | string | Optional size variant for tab styling |

May include additional parameters for styling and animation behavior.

## Usage Example
```tsx
<TileTabGroup 
  value={activeTab}
  onChange={setActiveTab}
  orientation="horizontal"
>
  <TileTabItem value="tab1" label="Overview" />
  <TileTabItem value="tab2" label="Details" />
</TileTabGroup>
```