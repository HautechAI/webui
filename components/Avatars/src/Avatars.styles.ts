import { styled } from '@hautechai/webui.themeprovider';

export default {
    AvatarContainer: styled.div<{ size: number }>`
        border-color: ${({ theme }) => theme.palette.layout.surfaceLow};
        border-radius: 50%;
        border-style: solid;
        border-width: ${({ theme }) => theme.foundation.stroke.standard}px;
        margin-left: -${({ size }) => size / 4}px;
    `,
    Container: styled('div')`
        display: flex;
        flex-direction: row;
    `,
};
