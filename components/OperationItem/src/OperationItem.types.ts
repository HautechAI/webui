import { ReactNode } from 'react';

export type OperationItemProps = {
    badge: ReactNode;
    chips?: ReactNode;
    date: string;
    previews: ReactNode;
    unread?: boolean;
    title: string;
    progress?: number;
};
