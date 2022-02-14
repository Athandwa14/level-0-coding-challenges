
function areaOfTriangle(side1,side2,side3){
    const semiParameter = (0.5)*(side1+side2+side3);
     const area = Math.sqrt(semiParameter*(semiParameter - side1)*(semiParameter - side2)*(semiParameter - side3));              // calculating the area of a triangle
    return area;
}