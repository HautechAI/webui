import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { ContextMenu } from '../src/ContextMenu';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('ContextMenu', () => {
    it('should render without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <ContextMenu menus={[<div key="test">Test Item</div>]}>Test</ContextMenu>
                </ThemeProvider>,
            );
        }).not.toThrow();
    });
});
