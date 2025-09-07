import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { TimelineToolbar } from '../src/TimelineToolbar';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('TimelineToolbar - testId prop', () => {
    it('should apply testId as data-testid attribute when provided', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <TimelineToolbar testId="my-test-timelinetoolbar" currentTime={0} repeatEnabled={false} />
            </ThemeProvider>,
        );

        expect(screen.getByTestId('my-test-timelinetoolbar')).toBeInTheDocument();
    });

    it('should not render data-testid attribute when testId is not provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <TimelineToolbar currentTime={0} repeatEnabled={false} />
            </ThemeProvider>,
        );

        const element = container.firstChild as Element;
        expect(element?.getAttribute?.('data-testid')).toBeNull();
    });
});
