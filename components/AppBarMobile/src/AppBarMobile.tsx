import { BurgerIcon } from '@hautechai/webui.icon';
import { IconButton } from '@hautechai/webui.iconbutton';
import { Logo } from '@hautechai/webui.logo';
import { styled } from '@hautechai/webui.themeprovider';

const Container = styled.div<Required<Pick<AppBarMobileProps, 'hierarchy'>>>`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: ${({ theme }) => theme.foundation.spacing.ml}px;
    padding: ${({ theme }) => theme.foundation.spacing.l}px;

    background-color: ${({ theme, hierarchy }) =>
        ({
            low: theme.palette.layout.surfaceLow,
            mid: theme.palette.layout.surfaceMid,
        }[hierarchy])};

    border-bottom-width: ${({ theme }) => theme.foundation.stroke.thin}px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.palette.layout.strokes};
`;

const CenterContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${({ theme }) => theme.foundation.spacing.l}px;
`;

const BottomContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: end;
    align-items: center;
    gap: ${({ theme }) => theme.foundation.spacing.l}px;
`;

const MobileHeader = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    align-items: center;
    gap: ${({ theme }) => theme.foundation.spacing.s}px;
`;

export type AppBarMobileProps = {
    hierarchy?: 'mid' | 'low';
    center?: React.ReactNode;
    bottom?: React.ReactNode;
    onBurgerClick: () => void;
};
export const AppBarMobile = (props: AppBarMobileProps) => {
    const { hierarchy = 'mid' } = props;
    return (
        <Container hierarchy={hierarchy}>
            <MobileHeader>
                <IconButton
                    onClick={props.onBurgerClick}
                    variant="outlined"
                    icon={<BurgerIcon color="layout.onSurface.secondary" />}
                />
                <Logo />
            </MobileHeader>
            <CenterContainer>{props.center}</CenterContainer>
            <BottomContainer>{props.bottom}</BottomContainer>
        </Container>
    );
};
