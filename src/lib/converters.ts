import { isValidIp } from './validations';
export const toBin = (numb:number) :string => {
    return numb.toString(2);
};

export const toHex = (numb:number) :string => {
    return numb.toString(16);
};

export const toDec = (numb:string) :number => {
    return Number(numb);
};

// Ip converters 
export const ipToBinArr = (ip:string|string[]) => {
    const valid = isValidIp(ip);
    if(!valid) throw TypeError('Invalid ipv4 format');
    if(typeof ip === 'string') ip = ip.split('.');
    const binArr = ip.map(oct => Number(oct).toString(2));
    return binArr;
}