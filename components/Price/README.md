# Price

## Purpose

Formatted display component for pricing information with price value and billing period.

## Installation

```bash
# pnpm (recommended)
pnpm add @hautechai/webui.price

# npm
npm install @hautechai/webui.price

# yarn
yarn add @hautechai/webui.price
```

## Parameters

| Parameter | Type   | Description                                                      |
| --------- | ------ | ---------------------------------------------------------------- |
| price     | string | Required price value text (e.g., "$29.99", "Free")               |
| period    | string | Required billing period text (e.g., "month", "year", "one-time") |

## Usage Example

```tsx
<Price price="$29.99" period="month" />
```
