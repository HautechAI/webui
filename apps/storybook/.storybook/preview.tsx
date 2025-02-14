import fontNormal from '@hautechai/webui.theme/fonts/inter.woff2';
import fontItalic from '@hautechai/webui.theme/fonts/inter-italic.woff2';

import { Preview } from '@storybook/react';
import { Theme } from '@hautechai/webui.theme';
import { ThemeProvider, Global } from '@hautechai/webui.themeprovider';

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
            <>
                <Global
                    styles={[
                        {
                            '@font-face': {
                                fontFamily: 'Inter',
                                fontStyle: 'normal',
                                fontWeight: '100 900',
                                fontDisplay: 'swap',
                                src: `url(${fontNormal}) format('woff2')`,
                            },
                        },
                        {
                            '@font-face': {
                                fontFamily: 'Inter',
                                fontStyle: 'italic',
                                fontWeight: '100 900',
                                fontDisplay: 'swap',
                                src: `url(${fontItalic}) format('woff2')`,
                            },
                        },
                    ]}
                />
                <ThemeProvider theme={Theme}>
                    <Story />
                </ThemeProvider>
            </>
        ),
    ],
};

export default preview;
