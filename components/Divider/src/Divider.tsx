import { styled } from '@hautechai/webui.themeprovider';

export const Divider = styled.div`
    border-bottom-width: ${({ theme }) => theme.foundation.stroke.thin}px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.palette.layout.strokes};
`;
