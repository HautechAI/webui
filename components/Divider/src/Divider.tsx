import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';

const StyledDivider = styled.div`
    border-bottom-width: ${themeVars.stroke.thin};
    border-bottom-style: solid;
    border-bottom-color: ${themeVars.layout.strokes};
`;

export const Divider = (props: { className?: string }) => {
    return <StyledDivider className={props.className} />;
};
