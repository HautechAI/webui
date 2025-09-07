export type BadgeColor = 'success' | 'error' | 'info';

export type BadgeProps = {
    color: BadgeColor;
    label: string;
    testId?: string;
};
