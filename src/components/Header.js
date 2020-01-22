import React, { Fragment } from 'react';
import styled from '@emotion/styled';

const StyledH3 = styled.h3`
    font-size: 2rem;
    font-family: 'Slabo 27px', serif;
`;

const Header = () => {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <StyledH3 className="my-3 mx-auto">Cotizador de Seguros</StyledH3>
            </nav>
        </Fragment>
    );
}

export default Header;