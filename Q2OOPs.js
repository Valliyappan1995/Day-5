
class Circle {
    constructor(radius = double, color = Red);
     this.radius = radius;
     this.color = color;
}

getRadius(radius) {
    return.radius = radius;
}

setRadius(radiusvalue) {
    this.radius = radiusvalue;
}

getColor(color) {
    return.color = color;
}

setColor(colorname) {
    this.color = colorname;
}

displayInfo() {
    return 'Circle [radius = ${this.radius} color = ${this.color]';
}

getArea(AreaOfRadius) {
    return Math.PI * Math.pow(2, AreaOfRadius);
}

getCircumference(CircumferenceOfRadius) {
    return 2 * Math.PI * this.radius;
}
