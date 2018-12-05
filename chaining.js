var class1 = function() {  
    this.result = 0;  
    this.add = function(input) {  
        this.result += input;  
        return this;  
    }  
    this.substract = function(input) {  
        this.result -= input;  
        return this;  
    }  
    this.print = function() {  
        console.log(this.result);  
    }  
};  
var object = new class1();  
object.add(4).substract(2).print();  
object.add(5);
object.print();