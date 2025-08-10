import { render } from '@testing-library/react';
import React from 'react';

// Mock ThemeProvider for testing
const MockThemeProvider = ({ children }: { children: React.ReactNode }) => children as React.ReactElement;

// Helper function to wrap components in ThemeProvider for testing
export const renderWithTheme = (component: React.ReactElement) => {
  return render(
    React.createElement(MockThemeProvider, {}, component)
  );
};

// Default props for components that require them
export const getDefaultProps = (componentName: string): any => {
  switch (componentName) {
    case 'Button':
      return { label: 'Test Button' };
    case 'TextInput':
      return { value: '', onChange: () => {} };
    case 'TextArea':
      return { value: '', onChange: () => {} };
    case 'Checkbox':
      return { checked: false, onChange: () => {} };
    case 'Switch':
      return { checked: false, onChange: () => {} };
    case 'Typography':
      return { children: 'Test Text' };
    case 'Field':
      return { children: 'Test Field' };
    case 'Slider':
      return { value: 50, onChange: () => {} };
    case 'Progress':
      return { value: 50 };
    case 'Counter':
      return { value: 0 };
    case 'Price':
      return { amount: 100, currency: 'USD' };
    case 'User':
      return { name: 'Test User' };
    case 'UserBalance':
      return { balance: 1000 };
    case 'DataItem':
      return { label: 'Test', value: 'Test Value' };
    case 'MenuItem':
      return { children: 'Test Item' };
    case 'Chip':
      return { label: 'Test Chip' };
    case 'Badge':
      return { children: 'Test Badge' };
    case 'Hint':
      return { children: 'Test Hint' };
    case 'Logo':
      return { src: 'test.png' };
    case 'Icon':
      return { name: 'test' };
    case 'IconButton':
      return { icon: 'test', onClick: () => {} };
    case 'LinkButton':
      return { href: '#', children: 'Test Link' };
    case 'TextButton':
      return { children: 'Test Button' };
    case 'FileInput':
      return { onChange: () => {} };
    case 'ImageInput':
      return { onChange: () => {} };
    case 'ImageInputWithSamples':
      return { onChange: () => {} };
    case 'Table':
      return { 
        columns: [{ key: 'test', label: 'Test' }], 
        data: [{ test: 'Test Data' }] 
      };
    case 'Pagination':
      return { 
        currentPage: 1, 
        totalPages: 5, 
        onPageChange: () => {} 
      };
    case 'SegmentedControl':
      return { 
        segments: [{ key: 'test', label: 'Test' }],
        selectedSegment: 'test',
        onSegmentChange: () => {}
      };
    case 'TileTabGroup':
      return { children: 'Test' };
    case 'TileTabItem':
      return { children: 'Test' };
    case 'Tooltip':
      return { children: 'Test', content: 'Tooltip content' };
    case 'Modal':
      return { 
        isOpen: true, 
        onClose: () => {},
        children: 'Test Modal'
      };
    case 'Popover':
      return { 
        isOpen: true,
        children: 'Test Popover'
      };
    case 'BottomSheet':
      return { 
        isOpen: true,
        onClose: () => {},
        children: 'Test Bottom Sheet'
      };
    case 'FloatingPanel':
      return { children: 'Test Panel' };
    case 'FullScreen':
      return { children: 'Test Content' };
    case 'HoverControls':
      return { children: 'Test Controls' };
    case 'Dropdown':
      return { 
        children: 'Test',
        items: [{ key: 'test', label: 'Test Item' }]
      };
    case 'Menu':
      return { children: 'Test Menu' };
    case 'ContextMenu':
      return { 
        children: 'Test',
        items: [{ key: 'test', label: 'Test Item' }]
      };
    case 'OperationItem':
      return { 
        title: 'Test Operation',
        description: 'Test Description'
      };
    case 'Previews':
      return { items: [] };
    case 'Masonry':
      return { children: [] };
    default:
      return {};
  }
};