import { PreviewsProps } from '@hautechai/webui.previews';
import { BadgeProps } from '@hautechai/webui.badge';
import { ChipProps } from '@hautechai/webui.chip';

export type OperationItemProps = {
    previews: PreviewsProps;
    badge: BadgeProps;
    chips?: ChipProps[];
    date: string;
    unread: boolean;
    title: string;
};
