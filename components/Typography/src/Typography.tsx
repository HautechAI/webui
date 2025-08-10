import { css, styled, themeVars, ThemeType } from '@hautechai/webui.themeprovider';
import { get } from 'lodash-es';
import { Paths } from 'type-fest';
import { useTheme } from '@hautechai/webui.themeprovider';

type TextAlign = 'left' | 'right' | 'center' | 'inherit';

const BaseComponent = (props: Pick<TypographyProps, 'className' | 'children' | 'component'> & { style?: React.CSSProperties }) => {
    const { className, children, component, style } = props;
    const Component = component ?? 'div';
    return <Component {...{ className, children, style }} />;
};

// Base text styles
const baseTextStyles = css`
    font-family: Inter;
    color: currentColor;
    text-align: inherit;
    -webkit-font-smoothing: antialiased;
`;

const noWrapStyles = css`
    white-space: nowrap;
`;

const hiddenOverflowStyles = css`
    overflow: hidden;
`;

const ellipsisOverflowStyles = css`
    overflow: hidden;
    text-overflow: ellipsis;
`;

// Typography variant styles
const h1Styles = css`
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
`;

const h2Styles = css`
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
`;

const h3Styles = css`
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
`;

const labelMediumButtonStyles = css`
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
`;

const labelMediumEmphasizedStyles = css`
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
`;

const labelMediumRegularStyles = css`
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
`;

const labelSmallEmphasizedStyles = css`
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
`;

const labelSmallRegularStyles = css`
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
`;

const bodyStyles = css`
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
`;

const captionEmphasizedStyles = css`
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
`;

const captionRegularStyles = css`
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
`;

const linkSmallStyles = css`
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-decoration-skip-ink: none;
    text-decoration-thickness: auto;
    text-underline-offset: auto;
    text-underline-position: from-font;
`;

const linkExtraSmallStyles = css`
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-decoration-skip-ink: none;
    text-decoration-thickness: auto;
    text-underline-offset: auto;
    text-underline-position: from-font;
`;

export const typographyClasses = {
    base: baseTextStyles,
    noWrap: noWrapStyles,
    hiddenOverflow: hiddenOverflowStyles,
    ellipsisOverflow: ellipsisOverflowStyles,
    variants: {
        H1: h1Styles,
        H2: h2Styles,
        H3: h3Styles,
        LabelMediumButton: labelMediumButtonStyles,
        LabelMediumEmphasized: labelMediumEmphasizedStyles,
        LabelMediumRegular: labelMediumRegularStyles,
        LabelSmallEmphasized: labelSmallEmphasizedStyles,
        LabelSmallRegular: labelSmallRegularStyles,
        Body: bodyStyles,
        CaptionEmphasized: captionEmphasizedStyles,
        CaptionRegular: captionRegularStyles,
        LinkSmall: linkSmallStyles,
        LinkExtraSmall: linkExtraSmallStyles,
    },
};

const StyledText = styled(BaseComponent)``;

export type TypographyProps = {
    className?: string;
    variant: keyof typeof typographyClasses.variants;

    children: React.ReactNode;
    color?: Paths<ThemeType['palette'], { leavesOnly: true }>;
    textAlign?: TextAlign;
    noWrap?: boolean;
    overflow?: 'auto' | 'hidden' | 'ellipsis';
    component?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
};

export const Typography = (props: TypographyProps) => {
    const { variant, color, textAlign, noWrap, overflow, ...rest } = props;
    const theme = useTheme();

    const classNames = [
        typographyClasses.base,
        typographyClasses.variants[variant],
        noWrap && typographyClasses.noWrap,
        overflow === 'hidden' && typographyClasses.hiddenOverflow,
        overflow === 'ellipsis' && typographyClasses.ellipsisOverflow,
    ]
        .filter(Boolean)
        .join(' ');

    const dynamicStyles: React.CSSProperties = {
        textAlign: textAlign ?? 'inherit',
        color: color ? get(theme.palette, color) : 'currentColor',
    };

    return <StyledText className={classNames} style={dynamicStyles} {...rest} />;
};
