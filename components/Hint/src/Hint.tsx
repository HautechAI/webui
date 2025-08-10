import { styled } from '@linaria/react';
import { HintIcon } from '@hautechai/webui.icon';
import { Tooltip } from '@hautechai/webui.tooltip';

const Icon = styled(HintIcon)`
    display: block;
    color: ${({ theme }) => theme.palette.layout.onSurface.tertiary};

    &:hover {
        color: ${({ theme }) => theme.palette.layout.onSurface.secondary};
    }

    transition: color ${({ theme }) => theme.foundation.animation.duration.fast}s
        ${({ theme }) => theme.foundation.animation.timing.easeOut};
`;

export type HintProps = {
    hint: string;
    position?: 'right' | 'left' | 'top' | 'bottom';
    buttonLabel?: string;
    onClick?: () => void;
};

export const Hint = ({ hint, buttonLabel, onClick, position = 'bottom' }: HintProps) => {
    return (
        <Tooltip size="medium" text={hint} buttonLabel={buttonLabel} onClick={onClick} position={position}>
            <Icon size={16} />
        </Tooltip>
    );
};
