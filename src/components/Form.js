import React, { useState } from 'react';
import Styled from '@emotion/styled';
import Error from './Error';
import { getYears, getDifferenceYear, getCalculateBrand, getCalculatePlan } from '../helpers/helper';
import PropTypes from 'prop-types';

const StyledButton = Styled.button`
    width: 100%;
    text-transform: uppercase;
    font-weight: bold;
    transition: background-image .3s ease;

    &:hover {
        background-image: linear-gradient(#f89558, #e27e3e 60%, #c77846) !important;
    }
`;

const Form = ({ setSummary, setLoading }) => {

    const years = getYears();

    const [data, setData] = useState({
        brand: '',
        year: '',
        plan: ''
    });

    const { brand, year, plan } = data;

    const getInformation = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    }

    const [error, setError] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();

        if (brand.trim() === '' || year.trim() === '' || plan.trim() === '') {
            setError(true);
        } else {
            setError(false);
            let base = 25590;
            const differenceYear = getDifferenceYear(year);
            base -= ((differenceYear * 3) * base) / 100; // Por cada año se resta el 3%
            const calculateBrand = getCalculateBrand(brand) * base;
            const calculatePlan = getCalculatePlan(plan);
            const planIncrement = parseFloat(calculatePlan * calculateBrand).toFixed(2);
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setSummary({
                    totalPlan: Number(planIncrement),
                    data
                });
            }, 3000);
        }
    }

    return (
        <form className="mt-5 offset-sm-4" onSubmit={handleSubmit}>
            {error ? <Error message="Todos los campos son obligatorios."></Error> : null}
            <div className="form-group">
                <label htmlFor="slcCarBrand">Marca:</label>
                <select id="slcCarBrand" className="form-control col-sm-6" name="brand" value={brand} onChange={getInformation}>
                    <option value="">Seleccione</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiático">Asiático</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="slcCarYear">Año:</label>
                <select id="slcCarYear" className="form-control col-sm-6" name="year" value={year} onChange={getInformation}>
                    <option value="">Seleccione</option>
                    {years.map(element => <option key={element} value={element}>{element}</option>)}
                </select>
            </div>
            <div className="form-group">
                <label>Plan:</label>
                <div className="custom-control custom-radio">
                    <input type="radio" id="rdbBasic" name="plan" className="custom-control-input" value="básico" checked={plan === "básico"} onChange={getInformation} />
                    <label className="custom-control-label" htmlFor="rdbBasic">Básico</label>
                </div>
                <div className="custom-control custom-radio">
                    <input type="radio" id="rdbComplete" name="plan" className="custom-control-input" value="completo" checked={plan === "completo"} onChange={getInformation} />
                    <label className="custom-control-label" htmlFor="rdbComplete">Completo</label>
                </div>
            </div>
            <div className="col-sm-6 text-center">
                <StyledButton className="btn btn-warning" type="submit">Cotizar</StyledButton>
            </div>
        </form>
    );
}

Form.propTypes = {
    setSummary: PropTypes.func.isRequired,
    setLoading: PropTypes.func.isRequired
}

export default Form;