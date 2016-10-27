//postfix expression calculator

var readline = require("readline");
var input = readline.createInterface({
    input: process.stdin
});

var stack = [];
var tokens = [];

input.on("line", (exp) => {
    stack = [];
    tokens = exp.split(" ");
    
    for(var i = 0; i < tokens.length; i++) {
        var x = parseInt(tokens[i]);
        if(isNaN(x)) {
            var v2 = stack.pop();
            var v1 = stack.pop();
            stack.push(result(v1, v2, tokens[i]));
        }
        else {
            stack.push(x);
        }
    }

    console.log(stack[0]);
});

function result(x, y, op) {
    if(op == "+") {
        return x + y;
    }
    else if(op == "-") {
        return x - y;
    }
    else if(op == "*") {
        return x * y;
    }
    else if(op == "/") {
        return x / y;
    }
}
