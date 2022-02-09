//calculating area of a triangle using the 3 sides of a triangle
function areaOfTriangle(side1,side2,side3){
    let semiPar = (0.5)*(side1+side2+side3);
     let area = Math.sqrt(semiPar*(semiPar - side1)*(semiPar - side2)*(semiPar - side3));              // calculating the area of a triangle
    return area;
}