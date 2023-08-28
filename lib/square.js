import Shape from "./shape";

class Square extends Shape {

    render() {
        return `<rect width="300" height="100" style="fill: rgb(0,0,255);stroke-width: 3;stroke:rgb(0,0,0)" />`
    }

}

module.exports = Square;
