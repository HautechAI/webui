import { createContext, PropsWithChildren, useContext } from 'react';

// Augment the pigment-css theme
declare module '@pigment-css/react' {
    interface ThemeArgs extends ThemeType {}
}

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

export const ThemeContext = createContext<ThemeType>({} as ThemeType);

export const ThemeProvider = ({ theme, children }: PropsWithChildren<{ theme: ThemeType }>) => {
    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    return useContext(ThemeContext);
};
