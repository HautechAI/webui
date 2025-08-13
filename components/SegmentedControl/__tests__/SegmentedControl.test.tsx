import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import SegmentedControl from '../src/SegmentedControl';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('SegmentedControl', () => {
    it('should render without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <SegmentedControl 
                        options={[{ value: 'test', label: 'Test' }]} 
                        value="test" 
                        onChange={() => {}} 
                    />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });
});
