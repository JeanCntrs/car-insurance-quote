import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ totalPlan }) => {
    return (
        <div className="alert alert-dismissible alert-success text-center offset-sm-3 col-sm-6 mt-4">
            <strong>El total del plan es: $ </strong>{totalPlan}
        </div>
    );
}

Result.propTypes = {
    totalPlan: PropTypes.number.isRequired
}

export default Result;