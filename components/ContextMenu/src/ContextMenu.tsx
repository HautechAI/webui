import React, { useRef, useState, useCallback, useEffect } from 'react';
import { Menu, MenuItem } from '@hautechai/webui.menu';
import { styled } from '@hautechai/webui.themeprovider';

export type ContextMenuProps = {
    items: MenuItem[];
    children: React.ReactNode;
};

const Container = styled.div<{ top: number; left: number }>`
    position: absolute;
    z-index: 1;
    top: ${({ top }) => top}px;
    left: ${({ left }) => left}px;
`;

export const ContextMenu = ({ items, children }: ContextMenuProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const menuRef = useRef<HTMLDivElement>(null);

    const handleOpen = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setPosition({ x: e.clientX, y: e.clientY });
        setIsOpen(true);
    }, []);

    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    }, []);

    useEffect(() => {
        isOpen
            ? document.addEventListener('click', handleClickOutside)
            : document.removeEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div onContextMenu={handleOpen} style={{ display: 'inline-block' }}>
            {children}
            {isOpen && (
                <Container top={position.y} left={position.x} ref={menuRef}>
                    <Menu items={items} />
                </Container>
            )}
        </div>
    );
};
