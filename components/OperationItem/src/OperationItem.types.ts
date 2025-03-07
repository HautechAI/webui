import { PreviewsProps } from '@hautechai/webui.previews';
import { BadgeProps } from '@hautechai/webui.badge';
import { ChipProps } from '@hautechai/webui.chip';

export type OperationItemProps = {
    badge: BadgeProps;
    chips?: ChipProps[];
    date: string;
    previews: PreviewsProps;
    unread: boolean;
    title: string;
};
