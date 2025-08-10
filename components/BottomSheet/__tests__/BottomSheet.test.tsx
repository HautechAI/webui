import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { BottomSheet } from '../src/BottomSheet';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('BottomSheet', () => {
  it('should render without crashing', () => {
    expect(() => {
      render(
        React.createElement(
          ThemeProvider,
          { theme: testTheme },
          React.createElement(BottomSheet, { isOpen: true, onClose: () => {}, children: 'Test Bottom Sheet' }})
        )
      );
    }).not.toThrow();
  });
});
