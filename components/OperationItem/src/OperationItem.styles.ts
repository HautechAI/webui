import { styled } from '@hautechai/webui.themeprovider';
import { Typography } from '@hautechai/webui.typography';

export default {
    Container: styled('div')`
        gap: ${({ theme }) => theme.foundation.spacing.s}px;
        padding: ${({ theme }) => theme.foundation.spacing.s}px;
        width: 310px;
    `,
    UnreadIndicator: styled('div')`
        background-color: ${({ theme }) => theme.palette.actions.primary};
        border-radius: ${({ theme }) => theme.foundation.cornerRadius.s}px;
        height: 6px;
        width: 6px;
    `,
};
