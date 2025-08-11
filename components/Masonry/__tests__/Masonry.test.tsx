import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

// Mock react-responsive-masonry for this test
vi.mock('react-responsive-masonry', () => ({
    default: ({ children, ...props }: any) => 
        React.createElement('div', { 
            ...props, 
            'data-testid': 'masonry',
            style: { display: 'grid', ...props.style }
        }, children),
}));

import { Masonry } from '../src';

describe('Masonry', () => {
    it('should render without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <Masonry />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });
});
