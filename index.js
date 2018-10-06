const rect = require('./rectangle');
function solveRect(l,b) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b);
    rect(l, b, (error, rectangle) => {
        if(error) {
            console.log("ERROR: "+error.message);
        } else {
            console.log("Perimeter = "+rectangle.perimeter());
            console.log("Area = "+rectangle.area());
        }

    })
    console.log("Message after call 'rect'");
};
solveRect(2,4);
solveRect(3,5);
solveRect(0,6);
solveRect(-3,6);