import React from 'react';

const CenteredContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    }}>
        {children}
    </div>
);

export default CenteredContainer;
