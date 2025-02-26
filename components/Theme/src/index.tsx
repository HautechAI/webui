import { ThemeType } from '@hautechai/webui.themeprovider';
import { PartialDeep } from 'type-fest';
import { merge } from 'lodash';

export const Theme: ThemeType = {
    foundation: {
        cornerRadius: {
            xs: 2,
            s: 4,
            m: 8,
            l: 16,
            xl: 24,
            xxl: 32,
        },
        spacing: {
            xs: 2,
            s: 4,
            m: 8,
            ml: 12,
            l: 16,
            xl: 24,
            xxl: 32,
            xxxl: 40,
        },
        stroke: {
            thin: 0.5,
            standard: 1,
            thick: 2,
            xthick: 4,
        },
    },

    palette: {
        layout: {
            surfaceLow: '#FCFCFC',
            surfaceMid: '#EFEFEF',
            surfaceHigh: '#E5E5E5',
            onSurface: {
                primary: '#3D3D3D',
                secondary: '#656565',
                tertiary: '#989898',
            },
            strokes: '#BDBDBD',
            skrim: '#00000080',
        },
        actions: {
            primary: '#517D89',
            onPrimary: '#F3F8F8',
            secondary: '#C5D8DC',
            onSecondary: '#466874',
            tertiary: '#9CBCC4',
            onTertiary: '#384A52',
            neutral: '#3D3D3D',
            onNeutral: '#FCFCFC',
            success: '#2C8D31',
            onSuccess: '#F2FBF2',
            error: '#D36560',
            onError: '#FCF6E6',
        },
    },
};

export const createTheme = (override: PartialDeep<ThemeType>): ThemeType => {
    return merge({}, Theme, override);
};
