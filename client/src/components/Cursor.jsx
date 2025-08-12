import React, { useState, useEffect } from 'react';
import './Cursor.css';

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [dotStyle, setDotStyle] = useState({});
    const [dotOutlineStyle, setDotOutlineStyle] = useState({});

    useEffect(() => {
        const onMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener('mousemove', onMouseMove);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    useEffect(() => {
        setDotStyle({
            left: `${position.x}px`,
            top: `${position.y}px`,
        });

        setDotOutlineStyle({
            left: `${position.x}px`,
            top: `${position.y}px`,
        });
    }, [position]);

    return (
        <>
            <div className='cursor-dot-outline' style={dotOutlineStyle}></div>
            <div className='cursor-dot' style={dotStyle}></div>
        </>
    );
};

export default Cursor;
