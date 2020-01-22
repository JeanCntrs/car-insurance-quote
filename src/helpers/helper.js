export const getYears = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let index = 0; index < 9; index++) {
        years.push(currentYear - index)
    }
    return years;
}

export const getDifferenceYear = year => {
    return new Date().getFullYear() - year;
}

export const getCalculateBrand = brand => {
    let increment;
    switch (brand) {
        case 'americano':
            increment = 1.30;
            break;
        case 'europeo':
            increment = 1.15;
            break;
        case 'asiático':
            increment = 1.05
            break;

        default:
            increment = 1;
            break;
    }
    return increment;
}

export const getCalculatePlan = plan => {
    return plan === 'básico' ? 1.20 : 1.50;
}