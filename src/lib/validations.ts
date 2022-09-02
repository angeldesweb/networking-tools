// Basics validations
export const isIntNumber = (numb:number) :boolean => {
    return Number.isInteger(numb);
};

export const isValidString = (numb:string) :boolean => {
    return isIntNumber(parseFloat(numb)) ? !!Number(numb) ? true : false : false;
};

export const isValidIp = (ip:string|string[]) :boolean => {
    if(typeof ip === 'string') ip = ip.split('.');
    const outers = ip.filter(oct => parseInt(oct) < 0 || parseInt(oct) > 255);
    return outers.length === 0 ? ip.length === 4 ? true : false : false;
};

export const isValidNumbIp = (ip:number[]) => {
    const outers = ip.filter(oct => oct < 0 || oct > 255);
    return outers.length === 0 ? ip.length === 4 ? true : false : false;
}