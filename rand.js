function range(offs, lim){
    [offs, lim].every(n => Number.isInteger(n)) || throw new Error("invalid input. function accepts only non negative arguments");
    
    return (lim - offs) * Math.random() + offs;
}