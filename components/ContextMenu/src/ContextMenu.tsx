import React, { ReactNode, useRef, useState, useCallback, useEffect } from 'react';
import { Badge } from '@hautechai/webui.badge';
import { Divider } from '@hautechai/webui.divider';
import { Row } from '@hautechai/webui.row';
import { Column } from '@hautechai/webui.column';
import { CloseIcon } from '@hautechai/webui.icon';
import { IconButton } from '@hautechai/webui.iconbutton';
import { BottomSheet } from '@hautechai/webui.bottomsheet';
import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';

export type ContextMenuProps = {
    heading?: {
        data: ReactNode;
        badge?: string;
    };
    menus?: ReactNode[];
    children: React.ReactNode;
    variation?: 'menu' | 'bottomSheet';
    isLeftClick?: boolean;
    testId?: string;
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${themeVars.spacing.m};
    position: absolute;
    z-index: 1;

    pointer-events: none;
    opacity: 0;
    transition: opacity ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut};

    border-radius: ${themeVars.cornerRadius.m};
    border-width: ${themeVars.stroke.thin};
    border-style: solid;
    border-color: ${themeVars.layout.strokes};
    background-color: ${themeVars.layout.surfaceLow};
    padding: ${themeVars.spacing.l} ${themeVars.spacing.s};
    min-width: 200px;

    &[data-open='true'] {
        pointer-events: auto;
        opacity: 1;
    }
`;

const MobileContainer = styled(Column)`
    padding: ${themeVars.spacing.l} ${themeVars.spacing.s};
`;

const Heading = styled(Row)`
    padding: 0 ${themeVars.spacing.ml};
`;

export const ContextMenu = ({
    menus,
    heading,
    children,
    variation = 'menu',
    isLeftClick,
    testId,
}: ContextMenuProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const menuRef = useRef<HTMLDivElement>(null);

    const handleOpen = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!isLeftClick) {
            e.preventDefault();
        }
        const targetRect = e.currentTarget.getBoundingClientRect();
        setIsOpen(true);
        requestAnimationFrame(() => {
            if (menuRef.current) {
                const rect = menuRef.current.getBoundingClientRect();

                let leftPos = 0;
                let topPos = 0;

                if (isLeftClick) {
                    leftPos = targetRect.left;
                    topPos = targetRect.bottom + 4;

                    if (leftPos + rect.width > window.innerWidth) {
                        leftPos = window.innerWidth - rect.width - 4;
                    }
                    if (topPos + rect.height > window.innerHeight) {
                        topPos = targetRect.top - rect.height - 4;
                    }
                } else {
                    leftPos = e.clientX;
                    topPos = e.clientY;

                    if (e.pageX + rect.width > window.innerWidth) {
                        leftPos = window.innerWidth - rect.width - 4;
                    }
                    if (e.pageY + rect.height > window.innerHeight) {
                        topPos = window.innerHeight - rect.height - 4;
                    }
                }

                setPosition({ x: leftPos, y: topPos });
            }
        });
    }, []);

    const handleClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    }, []);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        if (isOpen) {
            timeoutId = setTimeout(() => {
                document.addEventListener('click', handleClickOutside);
            }, 0);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            clearTimeout(timeoutId);
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div
            onContextMenu={!isLeftClick ? handleOpen : undefined}
            onClick={isLeftClick ? handleOpen : undefined}
            style={{ display: 'inline-block' }}
            data-testid={testId}
        >
            {children}
            {isOpen &&
                (variation === 'bottomSheet' ? (
                    <BottomSheet open onClose={handleClose}>
                        <MobileContainer spacing="m" stretch>
                            <Row justify="flex-end">
                                <IconButton icon={<CloseIcon />} onClick={handleClose} variant="flat" size="small" />
                            </Row>
                            {heading && (
                                <>
                                    <Heading spacing="l" align="center">
                                        {heading.data}
                                        {heading.badge && <Badge color="info" label={heading.badge} />}
                                    </Heading>
                                    <Divider />
                                </>
                            )}
                            {menus?.map((component, index) => (
                                <React.Fragment key={index}>
                                    {component}
                                    {index < menus.length - 1 && <Divider />}
                                </React.Fragment>
                            ))}
                        </MobileContainer>
                    </BottomSheet>
                ) : (
                    <Container
                        data-open={isOpen ? 'true' : 'false'}
                        ref={menuRef}
                        style={{ top: position.y, left: position.x }}
                    >
                        {heading && (
                            <>
                                <Heading spacing="l" align="center">
                                    {heading.data}
                                    {heading.badge && <Badge color="info" label={heading.badge} />}
                                </Heading>
                                <Divider />
                            </>
                        )}
                        {menus?.map((component, index) => (
                            <React.Fragment key={index}>
                                {component}
                                {index < menus.length - 1 && <Divider />}
                            </React.Fragment>
                        ))}
                    </Container>
                ))}
        </div>
    );
};
