import { ReactNode } from 'react';
import { ThemeType } from '@hautechai/webui.themeprovider';

export type BadgeColor = 'success' | 'error' | 'warning';

export type BadgeProps = {
    color: BadgeColor;
    label: string;
};
