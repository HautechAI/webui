import { PreviewsProps } from '@hautechai/webui.previews';
import { BadgeProps } from '@hautechai/webui.badge';
import { ChipProps } from '@hautechai/webui.chip';
import { ReactNode } from 'react';

export type OperationItemProps = {
    badge: ReactNode;
    chips?: ReactNode;
    date: string;
    previews: ReactNode;
    unread?: boolean;
    title: string;
};
