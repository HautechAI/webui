import { AvatarsProps } from '@hautechai/webui.avatars';
import { BadgeProps } from '@hautechai/webui.badge';
import { ReactNode } from 'react';

export type OperationItemProps = {
    avatars: AvatarsProps;
    badge: BadgeProps;
    date: string;
    unread: boolean;
    title: string;
};
