export const formatToTwoDigitsNumber = (number) => {
    const decimal = (number.toString().split('.')[1] || []).length;
    return decimal > 2 ? Number(number).toFixed(2) : number;
};
