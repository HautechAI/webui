import { styled } from '@linaria/react';
import { themeVars } from '@hautechai/webui.themeprovider';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: stretch;
    gap: ${themeVars.spacing.ml};
    padding: ${themeVars.spacing.l};

    background-color: ${themeVars.layout.surfaceMid};
    &[data-hierarchy='low'] {
        background-color: ${themeVars.layout.surfaceLow};
    }

    border-bottom-width: ${themeVars.stroke.thin};
    border-bottom-style: solid;
    border-bottom-color: ${themeVars.layout.strokes};
`;

const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${themeVars.spacing.l};
`;

export type AppBarMobileProps = {
    hierarchy?: 'mid' | 'low';
    top?: React.ReactNode;
    center?: React.ReactNode;
    bottom?: React.ReactNode;
};
export const AppBarMobile = (props: AppBarMobileProps) => {
    const { hierarchy = 'mid' } = props;
    return (
        <Container data-hierarchy={hierarchy}>
            <RowContainer>{props.top}</RowContainer>
            <RowContainer>{props.center}</RowContainer>
            <RowContainer>{props.bottom}</RowContainer>
        </Container>
    );
};
