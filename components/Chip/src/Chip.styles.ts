import { styled } from '@hautechai/webui.themeprovider';

export default {
    Container: styled('div')`
        border-color: ${({ theme }) => theme.palette.layout.strokes};
        border-radius: ${({ theme }) => theme.foundation.cornerRadius.s}px;
        border-style: solid;
        border-width: ${({ theme }) => theme.foundation.stroke.thin}px;
        gap: ${({ theme }) => theme.foundation.spacing.s}px;
        padding: ${({ theme }) => theme.foundation.spacing.s}px;
    `,
    Image: styled('img')`
        border-color: ${({ theme }) => theme.palette.layout.strokes};
        border-radius: ${({ theme }) => theme.foundation.cornerRadius.xs}px;
        border-style: solid;
        border-width: ${({ theme }) => theme.foundation.stroke.thin}px;
        height: 20px;
        width: 20px;
    `,
};
