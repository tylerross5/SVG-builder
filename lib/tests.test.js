const { square, triangle, Circle} = require("./shape");
const SVG = require("./SVG");


describe("Circle", () => {
    test("should render svg for a green circle element", () => {
      const expectedSvg = '<circle cx="150" cy="100" r="80" fill="green"/>';
        const circle= new Circle
        circle.setColor("green")
        const actualSvg = circle.render()
         expect(actualSvg).toEqual(expectedSvg)
    });
    test("should accept a fillColor filter", () => {
      const expectedSvg = '<circle cx="150" cy="100" r="80" fill="green" />';
        const circle= new Circle()
        circle.setColor("green")
        const actualSvg = circle.render()
        expect(actualSvg).toEqual(expectedSvg)
    });
  });

test("Renders a 300 x 200 svg element", () => {
    const expectedSvg =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>';
    const svg = new SVG()
    expect(svg.render()).toEqual(expectedSvg)
  });
