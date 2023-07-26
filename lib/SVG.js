class Svg{
    constructor(){
    this.textelement=""
    this.shapeelement=""
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`
    }
    settext(message,color){
        if(message.lenth>3){
            throw new Error("Can not be longer than three characters long")
        }
        this.textelement=`<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`
    }
    setshape(shape){
        this.shapeelement=shape.render();
    }
}
module.exports= Svg