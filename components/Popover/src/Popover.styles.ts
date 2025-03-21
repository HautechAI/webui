import { styled } from '@hautechai/webui.themeprovider';

export default {
    Close: styled('div')`
        cursor: pointer;
        &:hover {
            opacity: 0.5;
        }
    `,
    Container: styled('div')`
        background-color: ${({ theme }) => theme.palette.layout.surfaceLow};
        border-color: ${({ theme }) => theme.palette.layout.strokes};
        border-radius: ${({ theme }) => theme.foundation.cornerRadius.s}px;
        border-style: solid;
        border-width: ${({ theme }) => theme.foundation.stroke.thin}px;
        display: flex;
        flex-direction: column;
        margin: ${({ theme }) => theme.foundation.spacing.m}px;
        padding: ${({ theme }) => theme.foundation.spacing.m}px;
    `,
};
