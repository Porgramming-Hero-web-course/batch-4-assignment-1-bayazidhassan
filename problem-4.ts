{
    type Rectangle = {
        shape: 'rectangle';
        width: number;
        height: number
    }
    type Circle = {
        shape: 'circle';
        radius: number
    }
    type Shape = Rectangle | Circle;

    const calculateShapeArea = (shape: Shape): number => {
        if (shape.shape === 'rectangle') {
            return shape.width * shape.height;
        }
        else {
            return parseFloat((Math.PI * Math.pow(shape.radius, 2)).toFixed(2));
        }
    }

    const rectangleArea = calculateShapeArea({ shape: 'rectangle', width: 4, height: 2 });
    const circleArea = calculateShapeArea({ shape: 'circle', radius: 4 });
    console.log(rectangleArea);
    console.log(circleArea);
}