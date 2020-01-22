import React from 'react';
import PropTypes from 'prop-types';

const Summary = ({ data }) => {

    const { brand, year, plan } = data;

    return (
        <div className="alert alert-dismissible alert-primary offset-sm-3 col-sm-6 mt-4">
            <div className="offset-sm-4">
                <strong className="text-center offset-sm-2">Resumen</strong>
                <ul className="mt-2">
                    <li><strong>Año: </strong>{year}</li>
                    <li className="text-capitalize"><strong>Marca: </strong>{brand}</li>
                    <li className="text-capitalize"><strong>Plan: </strong>{plan}</li>
                </ul>
            </div>
        </div>
    );
}

Summary.propTypes = {
    data: PropTypes.object.isRequired
}

export default Summary;