import { useState, useRef, useEffect } from 'react';

export const useMenuToggle = () => {
    const [isOpen, setOpen] = useState(false);
    const menuRef = useRef(null);

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setOpen(false);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return { isOpen, setOpen, menuRef, handleClose };
};
