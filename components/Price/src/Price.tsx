import { styled } from '@hautechai/webui.themeprovider';
import { Typography } from '@hautechai/webui.typography';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: ${({ theme }) => theme.foundation.spacing.s}px;
    align-items: flex-end;
`;

export type PriceProps = {
    price: string;
    period: string;
};

export const Price = (props: PriceProps) => {
    return (
        <Container>
            <Typography variant="H1" color="layout.onSurface.primary">
                {props.price}
            </Typography>
            <Typography variant="LabelMediumRegular" color="layout.onSurface.tertiary">
                /
            </Typography>
            <Typography variant="LabelMediumRegular" color="layout.onSurface.tertiary">
                {props.period}
            </Typography>
        </Container>
    );
};
