function Validity(s){
    if (s.length % 2 !==0) // To check if the input parantesis length is even or odd.
    return false;
    while (s.includes('{}') || s.includes('()') || s.includes('[]')){ //method to go through loop to chec if a character exist
    s = s.replace('{}', '').replace('()', '').replace('[]', ''); //just like pop
}
return s ==='';
}
console.log(Validity('()'))
console.log(Validity('([)}'))
console.log(Validity('([])'))
