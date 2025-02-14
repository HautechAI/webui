import { createContext, PropsWithChildren, useContext } from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";

declare module "@emotion/react" {
  export interface Theme extends ThemeType {}
}

export type ThemeType = {
  foundation: {
    cornerRadius: {
      xs: number;
      s: number;
      m: number;
      l: number;
      xl: number;
      xxl: number;
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
      onSurface: {
        primary: string;
        secondary: string;
        tertiary: string;
      };
      strokes: string;
      skrim: string;
    };
    actions: {
      primary: string;
      onPrimary: string;
      secondary: string;
      onSecondary: string;
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

export const ThemeProvider = ({
  theme,
  children,
}: PropsWithChildren<{ theme: ThemeType }>) => {
  return (
    <ThemeContext.Provider value={theme}>
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
