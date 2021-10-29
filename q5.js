function shapeArea(n) {
    let area;
    if(n<0){
        return false
    }
    return area=((n*n)+((n-1)*(n-1)));
    console.log(area);
}

console.log(shapeArea(3));