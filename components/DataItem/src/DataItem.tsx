import { styled } from '@hautechai/webui.themeprovider';
import { Typography } from '@hautechai/webui.typography';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.foundation.spacing.s}px;
`;

export type DataItemProps = {
    label: string;
    value: string;
};

export const DataItem = (props: DataItemProps) => {
    return (
        <Container>
            <Typography variant="LabelSmallRegular" color="layout.onSurface.tertiary">
                {props.label}
            </Typography>
            <Typography variant="LabelMediumEmphasized" color='layout.onSurface.primary'>{props.value}</Typography>
        </Container>
    );
};
