# Pagination

## Purpose
Navigation control component for paginated content with page numbers and navigation functionality.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| totalPages | number | Required total number of pages available |
| currentPage | number | Required current active page number |
| onPageChange | (page: number) => void | Required callback function triggered when page selection changes |
| getPageHref | (page: number) => string | Optional function to generate href URLs for each page link |

## Usage Example
```tsx
<Pagination 
  totalPages={10}
  currentPage={currentPage}
  onPageChange={handlePageChange}
  getPageHref={(page) => `/items?page=${page}`}
/>
```