import { styled, css } from '@hautechai/webui.themeprovider';

export default {
    Close: styled('div')`
        cursor: pointer;
        &:hover {
            opacity: 0.5;
        }
    `,
    Container: styled('div')<{ cleanStyle?: boolean }>`
        ${({ cleanStyle, theme }) =>
            cleanStyle
                ? css`
                      display: flex;
                      flex-direction: column;
                      margin: ${theme.foundation.spacing.m}px;
                  `
                : css`
                      background-color: white;
                      border-color: ${theme.palette.layout.strokes};
                      border-radius: ${theme.foundation.cornerRadius.s}px;
                      border-style: solid;
                      border-width: ${theme.foundation.stroke.thin}px;
                      display: flex;
                      flex-direction: column;
                      margin: ${theme.foundation.spacing.m}px;
                      padding: ${theme.foundation.spacing.m}px;
                  `};
    `,
};
