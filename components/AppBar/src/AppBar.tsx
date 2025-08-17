import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${themeVars.layout.surfaceMid};
    &[data-hierarchy="low"] {
        background-color: ${themeVars.layout.surfaceLow};
    }
    padding: ${themeVars.spacing.l} ${themeVars.spacing.xl};
    border-bottom-width: ${themeVars.stroke.thin};
    border-bottom-style: solid;
    border-bottom-color: ${themeVars.layout.strokes};
`;

const LeftContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    gap: ${themeVars.spacing.l};
    align-items: center;
`;

const CenterContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: ${themeVars.spacing.l};
    align-items: center;
`;

const RightContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: end;
    gap: ${themeVars.spacing.l};
    align-items: center;
`;

export type AppBarProps = {
    hierarchy?: 'mid' | 'low';
    left?: React.ReactNode;
    center?: React.ReactNode;
    right?: React.ReactNode;
};
export const AppBar = (props: AppBarProps) => {
    const { hierarchy = 'mid' } = props;
    return (
    <Container data-hierarchy={hierarchy}>
            <LeftContainer>{props.left}</LeftContainer>
            <CenterContainer>{props.center}</CenterContainer>
            <RightContainer>{props.right}</RightContainer>
        </Container>
    );
};
