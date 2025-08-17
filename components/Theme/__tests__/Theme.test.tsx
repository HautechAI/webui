import { describe, it, expect } from 'vitest';
import { Theme, createTheme } from '../src/index';

describe('Theme', () => {
    it('should render without crashing', () => {
        expect(() => {
            expect(Theme).toBeDefined();
            expect(Theme.foundation).toBeDefined();
            expect(Theme.palette).toBeDefined();
        }).not.toThrow();
    });

    it('should create custom theme', () => {
        expect(() => {
            const customTheme = createTheme({
                foundation: {
                    spacing: {
                        xs: 4,
                    },
                },
            });
            expect(customTheme.foundation.spacing.xs).toBe(4);
        }).not.toThrow();
    });
});
