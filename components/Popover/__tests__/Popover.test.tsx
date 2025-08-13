import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { Popover } from '../src/Popover';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('Popover', () => {
    it('should render without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <Popover
                        content={({ close }) => <div onClick={close}>Content</div>}
                        trigger={() => <button>Trigger</button>}
                    />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });
});
