import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { Button } from '../src/Button';
import { ThemeProvider, ThemeType } from '../../ThemeProvider/src';

const testTheme: ThemeType = {
  foundation: {
    animation: {
      duration: { fast: 0.25, normal: 0.5, slow: 1 },
      timing: { ease: 'ease', easeOut: 'ease-out', easeInOut: 'ease-in-out', customBounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)' },
    },
    cornerRadius: { xs: 2, s: 4, m: 8, l: 16, xl: 24, xxl: 32 },
    elevation: { one: '0px 0px 24px 0px rgba(42, 47, 60, 0.1)', two: '0px 0px 14px 0px rgba(42, 47, 60, 0.08)' },
    spacing: { xs: 2, s: 4, m: 8, ml: 12, l: 16, xl: 24, xxl: 32, xxxl: 40 },
    stroke: { thin: 0.5, standard: 1, thick: 2, xthick: 4 },
  },
  palette: {
    layout: {
      surfaceLow: '#FCFCFC', surfaceMid: '#EFEFEF', surfaceHigh: '#E5E5E5',
      onSurface: { primary: '#3D3D3D', secondary: '#656565', tertiary: '#989898' },
      strokes: '#BDBDBD', skrim: '#00000080',
    },
    actions: {
      primary: '#517D89', onPrimary: '#F3F8F8', secondary: '#C5D8DC', onSecondary: '#466874',
      tertiary: '#9CBCC4', onTertiary: '#384A52', neutral: '#3D3D3D', onNeutral: '#FCFCFC',
      success: '#2C8D31', onSuccess: '#F2FBF2', error: '#D36560', onError: '#FCF6E6',
    },
  },
};

describe('Button', () => {
  it('should render without crashing', () => {
    expect(() => {
      render(
        React.createElement(
          ThemeProvider,
          { theme: testTheme },
          React.createElement(Button, { label: 'Test Button' })
        )
      );
    }).not.toThrow();
  });
});