import { styled } from '@hautechai/webui.themeprovider';
import { themeVars, ThemeType } from '@hautechai/webui.themeprovider';
import { get } from 'lodash-es';
import { Paths } from 'type-fest';

type TextAlign = 'left' | 'right' | 'center' | 'inherit';

const BaseComponent = (
    props: Pick<TypographyProps, 'className' | 'children' | 'component'> & { style?: React.CSSProperties },
) => {
    const { component, ...rest } = props;
    const Component = component ?? 'div';
    return <Component {...rest} />;
};

type TypographyVariant =
    | 'H1'
    | 'H2'
    | 'H3'
    | 'LabelMediumButton'
    | 'LabelMediumEmphasized'
    | 'LabelMediumRegular'
    | 'LabelSmallEmphasized'
    | 'LabelSmallRegular'
    | 'Body'
    | 'CaptionEmphasized'
    | 'CaptionRegular'
    | 'LinkSmall'
    | 'LinkExtraSmall';

const StyledText = styled(BaseComponent)`
    /* Base */
    font-family: Inter;
    color: currentColor;
    -webkit-font-smoothing: antialiased;

    /* No wrap */
    &[data-nowrap='true'] {
        white-space: nowrap;
    }

    /* Overflow handling */
    &[data-overflow='hidden'] {
        overflow: hidden;
    }

    &[data-overflow='ellipsis'] {
        overflow: hidden;
        text-overflow: ellipsis;
    }

    /* Variants */
    &[data-variant='H1'] {
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 22px;
    }

    &[data-variant='H2'] {
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px;
    }

    &[data-variant='H3'] {
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px;
    }

    &[data-variant='LabelMediumButton'] {
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
    }

    &[data-variant='LabelMediumEmphasized'] {
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px;
    }

    &[data-variant='LabelMediumRegular'] {
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
    }

    &[data-variant='LabelSmallEmphasized'] {
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px;
    }

    &[data-variant='LabelSmallRegular'] {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
    }

    &[data-variant='Body'] {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
    }

    &[data-variant='CaptionEmphasized'] {
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px;
    }

    &[data-variant='CaptionRegular'] {
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
    }

    &[data-variant='LinkSmall'] {
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
    }

    &[data-variant='LinkExtraSmall'] {
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
    }
`;

export type TypographyProps = {
    className?: string;
    variant: TypographyVariant;

    children: React.ReactNode;
    color?: Paths<ThemeType['palette'], { leavesOnly: true }>;
    textAlign?: TextAlign;
    noWrap?: boolean;
    overflow?: 'auto' | 'hidden' | 'ellipsis';
    component?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
};

export const Typography = (props: TypographyProps) => {
    const { variant, color, textAlign, noWrap, overflow, ...rest } = props;

    const dynamicStyles: React.CSSProperties = {
        color: color ? get(themeVars, color) : 'currentColor',
        textAlign: textAlign ?? 'inherit',
    };

    return (
        <StyledText
            data-variant={variant}
            data-nowrap={noWrap ? 'true' : undefined}
            data-overflow={overflow}
            style={dynamicStyles}
            {...rest}
        />
    );
};
