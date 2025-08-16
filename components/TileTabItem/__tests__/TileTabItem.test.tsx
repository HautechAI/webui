import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { TileTabItem } from '../src/TileTabItem';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('TileTabItem', () => {
    it('should render without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <TileTabItem value="test" />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });
});
