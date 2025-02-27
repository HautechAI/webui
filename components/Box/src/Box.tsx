import { css, styled, ThemeType } from '@hautechai/webui.themeprovider';
import { PropsWithChildren } from 'react';

const StyledBox = styled.div<Omit<BoxProps, 'icon'>>`
    ${({ width }) =>
        width
            ? css`
                  padding: ${width}px;
              `
            : ''}

    ${({ height }) =>
        height
            ? css`
                  padding: ${height}px;
              `
            : ''}

    ${({ theme, padding }) =>
        padding
            ? css`
                  padding: ${theme.foundation.spacing[padding]}px;
              `
            : ''}

    ${({ theme, paddingTop }) =>
        paddingTop
            ? css`
                  padding-top: ${theme.foundation.spacing[paddingTop]}px;
              `
            : ''}

    ${({ theme, paddingRight }) =>
        paddingRight
            ? css`
                  padding-right: ${theme.foundation.spacing[paddingRight]}px;
              `
            : ''}

${({ theme, paddingBottom }) =>
        paddingBottom
            ? css`
                  padding-bottom: ${theme.foundation.spacing[paddingBottom]}px;
              `
            : ''}

${({ theme, paddingLeft }) =>
        paddingLeft
            ? css`
                  padding-left: ${theme.foundation.spacing[paddingLeft]}px;
              `
            : ''}
`;

export type BoxProps = PropsWithChildren<{
    width?: number;
    height?: number;
    padding?: keyof ThemeType['foundation']['spacing'];
    paddingTop?: keyof ThemeType['foundation']['spacing'];
    paddingRight?: keyof ThemeType['foundation']['spacing'];
    paddingBottom?: keyof ThemeType['foundation']['spacing'];
    paddingLeft?: keyof ThemeType['foundation']['spacing'];
}>;

export const Box = (props: BoxProps) => {
    return <StyledBox {...props} />;
};
