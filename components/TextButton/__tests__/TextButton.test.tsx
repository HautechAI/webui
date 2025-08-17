import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { TextButton } from '../src/TextButton';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('TextButton', () => {
    it('should render without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <TextButton label="Test Button" />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });
});
