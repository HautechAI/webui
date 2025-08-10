import { styled } from '@linaria/react';

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
        border-radius: ${({ theme }) => theme.foundation.cornerRadius.m}px;
        border-style: solid;
        border-width: ${({ theme }) => theme.foundation.stroke.thin}px;
        display: flex;
        flex-direction: column;
        margin: ${({ theme }) => theme.foundation.spacing.m}px;
        padding: ${({ theme }) => theme.foundation.spacing.l}px ${({ theme }) => theme.foundation.spacing.s}px;
    `,
};
