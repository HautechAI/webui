import { styled } from '@linaria/react';

export default {
    Container: styled('div')`
        display: flex;
        flex-direction: row;
    `,
    Preview: styled.img`
        border-radius: 50%;
        height: 24px;
        width: 24px;
    `,
    PreviewContainer: styled.div`
        border-color: ${({ theme }) => theme.palette.layout.surfaceLow};
        border-radius: 50%;
        border-style: solid;
        border-width: ${({ theme }) => theme.foundation.stroke.standard}px;
        margin-left: -6px;
    `,
};
