import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { OperationItem } from '../src/OperationItem';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('OperationItem - testId prop', () => {
    it('should apply testId as data-testid attribute when provided', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <OperationItem
                    testId="my-test-operationitem"
                    badge="test"
                    date="2024-01-01"
                    previews={[]}
                    title="Test"
                />
            </ThemeProvider>,
        );

        expect(screen.getByTestId('my-test-operationitem')).toBeInTheDocument();
    });

    it('should not render data-testid attribute when testId is not provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <OperationItem badge="test" date="2024-01-01" previews={[]} title="Test" />
            </ThemeProvider>,
        );

        const element = container.firstChild as Element;
        expect(element?.getAttribute?.('data-testid')).toBeNull();
    });
});
