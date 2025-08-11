import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { Dropdown } from '../src/Dropdown';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('Dropdown', () => {
    it('should render without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <Dropdown items={[{ key: 'test', label: 'Test Item' }]}>Test</Dropdown>
                </ThemeProvider>,
            );
        }).not.toThrow();
    });
});
