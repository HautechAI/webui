# Masonry

## Purpose

Grid layout component that arranges items in a masonry-style layout with dynamic positioning based on content height.

## Parameters

| Parameter | Type             | Description                                     |
| --------- | ---------------- | ----------------------------------------------- |
| children  | React.ReactNode  | Required items to be arranged in masonry layout |
| columns   | number           | Optional number of columns in the masonry grid  |
| gap       | number \| string | Optional spacing between masonry items          |
| width     | number \| string | Optional total width of the masonry container   |

May include additional parameters for responsive behavior and item sizing.

## Usage Example

```tsx
<Masonry columns={3} gap={16} width="100%">
    <Card1 />
    <Card2 />
    <Card3 />
</Masonry>
```
