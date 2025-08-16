import { PropsWithChildren, useEffect } from 'react';
import { themeToCssProperties } from './theme-to-css';

export type ThemeType = {
    foundation: {
        animation: {
            duration: {
                fast: number;
                normal: number;
                slow: number;
            };
            timing: {
                ease: string;
                easeOut: string;
                easeInOut: string;
                customBounce: string;
            };
        };
        cornerRadius: {
            xs: number;
            s: number;
            m: number;
            l: number;
            xl: number;
            xxl: number;
        };
        elevation: {
            one: string;
            two: string;
        };
        spacing: {
            xs: number;
            s: number;
            m: number;
            ml: number;
            l: number;
            xl: number;
            xxl: number;
            xxxl: number;
        };
        stroke: {
            thin: number;
            standard: number;
            thick: number;
            xthick: number;
        };
    };
    palette: {
        layout: {
            surfaceLow: string;
            surfaceMid: string;
            surfaceHigh: string;
            strokes: string;
            skrim: string;
            onSurface: {
                primary: string;
                secondary: string;
                tertiary: string;
            };
        };
        actions: {
            primary: string;
            onPrimary: string;
            secondary: string;
            onSecondary: string;
            tertiary: string;
            onTertiary: string;
            neutral: string;
            onNeutral: string;
            success: string;
            onSuccess: string;
            error: string;
            onError: string;
        };
    };
};

export const ThemeProvider = ({ theme, children }: PropsWithChildren<{ theme: ThemeType }>) => {
    useEffect(() => {
        // Inject CSS custom properties into the root element
        const cssProperties = themeToCssProperties(theme);
        const rootElement = document.documentElement;

        Object.entries(cssProperties).forEach(([property, value]) => {
            rootElement.style.setProperty(property, value);
        });

        return () => {
            // Clean up on unmount
            Object.keys(cssProperties).forEach((property) => {
                rootElement.style.removeProperty(property);
            });
        };
    }, [theme]);

    return <>{children}</>;
};
