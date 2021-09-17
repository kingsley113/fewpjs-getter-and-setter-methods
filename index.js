// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  // Diameter
  get diameter() {
    return this.radius * 2;
  }

  set diameter(newDiameter) {
    this.radius = newDiameter / 2;
  }

  // Circumference
  get circumference() {
    return this.diameter * Math.PI;
  }

  set circumference(newCircumference) {
    this.radius = newCircumference / Math.PI / 2;
  }

  // Area
  get area() {
    return this.radius ** 2 * Math.PI;
  }

  set area(newArea) {
    this.radius = Math.sqrt(newArea / Math.PI);
  }
}
