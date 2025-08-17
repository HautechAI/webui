import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { LinkButton } from '../src/LinkButton';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('LinkButton', () => {
    it('should render without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <LinkButton label="Test Link" />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });
});
