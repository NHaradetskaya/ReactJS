import React, { useState, useEffect } from 'react';

const withLoadingDelay = (WrappedComponent) => (props) => {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
    }, []);

    return isLoading ? (
        <div style={{ textAlign: 'center' }}>
            <img
                alt="spinner"
                style={{
                    margin: '50px 150px',
                    width: '100px',
                }}
                src={'/images/spinner.gif'}
            />
        </div>
    ) : (
        <WrappedComponent {...props} />
    );
};

export default withLoadingDelay;
