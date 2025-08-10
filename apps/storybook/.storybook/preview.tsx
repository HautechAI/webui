import './fonts.css';

import { Preview } from '@storybook/react';
import { Theme } from '@hautechai/webui.theme';
import { ThemeProvider } from '@hautechai/webui.themeprovider';

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
            <ThemeProvider theme={Theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
};

export default preview;
