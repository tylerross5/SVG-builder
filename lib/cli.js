const inquirer = require("inquirer");
const {square, triangle, Circle} =require("./shape")
const Svg= require ("./SVG")
const { writeFile } = require("fs/promises");



class CLI {
  run() {
    return inquirer
      .prompt([
        {
          name: "text",
          type: "input",
          message:
            "Enter in your text for the logo",
          validate: (text) =>
            text.length <= 3 ||
                "Must not cotain more than three characters",
        },
        {
          name: "textColor",
          type: "input",
          message: "Enter a color for your text",
        },
        {
          name: "shapeType",
          type: "list",
          message: "Select the shape you want for your logo",
          choices: ["circle", "square", "triangle"],
        },
        {
          name: "shapeColor",
          type: "input",
          message: "Select a color for your shape",
        },
      ]
    )
      .then(({ text, textColor, shapeType, shapeColor }) => {
        let shape;
        switch (shapeType) {
          case "circle":
            shape = new Circle();
            break;

        case "triangle":
          shape = new triangle();
          break;

        default:
            shape = new square();
          break;
        }
        shape.setcolor(shapeColor);

        const svg = new Svg();
        svg.settext(text, textColor);
        svg.setshape(shape);
        return writeFile("logo.svg", svg.render());})
      .then(() => { console.log("Generated logo.svg");})
      .catch((error) => {
        console.log(error);
        console.log("Error occured.");});
  }
}

module.exports = CLI;