import { styled } from '@hautechai/webui.themeprovider';
import { Typography } from '@hautechai/webui.typography';

export default {
    Container: styled('div')`
        border-color: ${({ theme }) => theme.palette.layout.strokes};
        border-radius: ${({ theme }) => theme.foundation.cornerRadius.s}px;
        border-style: solid;
        border-width: ${({ theme }) => theme.foundation.stroke.thin}px;
        gap: ${({ theme }) => theme.foundation.spacing.s}px;
        padding: ${({ theme }) => theme.foundation.spacing.s}px;
    `,
    Icon: styled('div')`
        align-self: center;
        border-color: ${({ theme }) => theme.palette.layout.strokes};
        border-radius: ${({ theme }) => theme.foundation.cornerRadius.s}px;
        border-style: solid;
        border-width: ${({ theme }) => theme.foundation.stroke.thin}px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: ${({ theme }) => theme.foundation.spacing.xs}px;
    `,
    Image: styled('img')`
        border-color: ${({ theme }) => theme.palette.layout.strokes};
        border-radius: ${({ theme }) => theme.foundation.cornerRadius.xs}px;
        border-style: solid;
        border-width: ${({ theme }) => theme.foundation.stroke.thin}px;
        height: 20px;
        width: 20px;
    `,
    Text: styled(Typography)`
        max-width: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    `,
};
