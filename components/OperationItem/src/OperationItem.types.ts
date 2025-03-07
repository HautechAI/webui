import { AvatarsProps } from '@hautechai/webui.avatars';
import { BadgeProps } from '@hautechai/webui.badge';
import { ChipProps } from '@hautechai/webui.chip';

export type OperationItemProps = {
    avatars: AvatarsProps;
    badge: BadgeProps;
    chips?: ChipProps[];
    date: string;
    unread: boolean;
    title: string;
};
