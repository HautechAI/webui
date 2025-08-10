import fontNormal from '@hautechai/webui.theme/fonts/inter.woff2';
import fontItalic from '@hautechai/webui.theme/fonts/inter-italic.woff2';

import { Preview } from '@storybook/react';
import { Theme } from '@hautechai/webui.theme';
import { ThemeProvider, css } from '@hautechai/webui.themeprovider';

// Global font styles using Linaria
const globalStyles = css`
    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 100 900;
        font-display: swap;
        src: url(${fontNormal}) format('woff2');
    }

    @font-face {
        font-family: 'Inter';
        font-style: italic;
        font-weight: 100 900;
        font-display: swap;
        src: url(${fontItalic}) format('woff2');
    }
`;

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (Story) => (
            <div className={globalStyles}>
                <ThemeProvider theme={Theme}>
                    <Story />
                </ThemeProvider>
            </div>
        ),
    ],
};

export default preview;
