import { styled, ThemeType } from '@hautechai/webui.themeprovider';
import { Typography } from '@hautechai/webui.typography';
import { BadgeColor } from './Badge.types';

const getBackgroundColor = (color: BadgeColor, theme: ThemeType) =>
    ({
        success: theme.palette.actions.onSuccess,
        error: theme.palette.actions.onError,
        info: theme.palette.layout.surfaceMid,
    }[color]);

const getTextColor = (color: BadgeColor, theme: ThemeType) =>
    ({
        success: theme.palette.actions.success,
        error: theme.palette.actions.error,
        info: theme.palette.layout.onSurface.secondary,
    }[color]);

export default {
    Container: styled('div')<{ badgeColor: BadgeColor }>`
        background-color: ${({ theme, badgeColor }) => getBackgroundColor(badgeColor, theme)};
        border-radius: ${({ theme }) => theme.foundation.cornerRadius.s}px;
        gap: ${({ theme }) => theme.foundation.spacing.s}px;
        padding: ${({ theme }) => theme.foundation.spacing.s}px ${({ theme }) => theme.foundation.spacing.m}px;
    `,
    Text: styled(Typography)<{ badgeColor: BadgeColor }>`
        color: ${({ theme, badgeColor }) => getTextColor(badgeColor, theme)};
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    `,
};
