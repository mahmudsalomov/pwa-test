import React, { useState, useEffect } from 'react';

interface TypewriterProps {
    text: string;
    delay?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, delay = 100 }) => {

    return <span style={{fontSize:'20px'}}>Bu yerda e-tob bor</span>;
};

export default Typewriter;
