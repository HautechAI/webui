import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';

export default {
    Container: styled('div')`
        display: flex;
        flex-direction: row;
    `,
    Preview: styled.img`
        border-radius: 50%;
        height: 24px;
        width: 24px;
    `,
    PreviewContainer: styled.div`
        border-color: ${themeVars.layout.surfaceLow};
        border-radius: 50%;
        border-style: solid;
        border-width: ${themeVars.stroke.standard};
        margin-left: -6px;
    `,
};
