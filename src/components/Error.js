import React from 'react';

const Error = ({ message }) => {
    return (
        <div className="alert alert-dismissible alert-danger col-sm-6">
            <strong>{message}</strong>
        </div>
    );
}

export default Error;