import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { OperationItem } from '../src/OperationItem';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('OperationItem', () => {
    it('should render without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <OperationItem title="Test Operation" description="Test Description" />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });
});
