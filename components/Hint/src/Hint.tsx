import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';
import { HintIcon } from '@hautechai/webui.icon';
import { Tooltip } from '@hautechai/webui.tooltip';

const Icon = styled(HintIcon)`
    display: block;
    color: ${themeVars.layout.onSurface.tertiary};

    &:hover {
        color: ${themeVars.layout.onSurface.secondary};
    }

    transition: color ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut};
`;

export type HintProps = {
    hint: string;
    position?: 'right' | 'left' | 'top' | 'bottom';
    buttonLabel?: string;
    onClick?: () => void;
    testId?: string;
};

export const Hint = ({ hint, buttonLabel, onClick, position = 'bottom', testId }: HintProps) => {
    return (
        <Tooltip size="medium" text={hint} buttonLabel={buttonLabel} onClick={onClick} position={position} data-testid={testId}>
            <Icon size={16} />
        </Tooltip>
    );
};
