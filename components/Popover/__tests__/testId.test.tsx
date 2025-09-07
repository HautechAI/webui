import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Popover } from '../src/Popover';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('Popover - testId prop', () => {
    it('should apply testId as data-testid attribute when provided', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <Popover
                    testId="my-test-popover"
                    content={({ close: _close }) => <div>Content</div>}
                    trigger={() => <div>Trigger</div>}
                />
            </ThemeProvider>,
        );

        expect(screen.getByTestId('my-test-popover')).toBeInTheDocument();
    });

    it('should not render data-testid attribute when testId is not provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <Popover content={({ close: _close }) => <div>Content</div>} trigger={() => <div>Trigger</div>} />
            </ThemeProvider>,
        );

        const element = container.querySelector('[data-testid]');
        expect(element).toBeNull();
    });
});
