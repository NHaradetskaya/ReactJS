import React, { useState, useEffect } from 'react';

const withLoadingDelay = WrappedComponent => props => {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
    }, []);

    return isLoading ? (
        <img
            alt="spinner"
            style={{
                margin: '50px 150px',
                width: '100px',
            }}
            src={'./images/spinner.gif'}
        />
    ) : (
        <WrappedComponent {...props} />
    );
};

export default withLoadingDelay;
