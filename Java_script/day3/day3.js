// Introduction to objects 
// Constructors
// Prototypes
// Object map
// Introduction to classes
// Class Inheritance

function print(string){
    console.log(string);

}


var student = {name : "Arjun",location : "VI",empID : 12 };


// deletion of emp_id
delete student.empID
print(student)


//length of keys
print(Object.keys(student).length);


//add new prop
student["Key_skills"]="UI"
print(student)


substring = new Array();
for (let i=0;i<student.name.length;i++)
{
    for(let j=i+1;j<student.name.length+1;j++){


    substring.push(student.name.slice(i,j));
    }
}
print(substring)



// .Add a method on inbuilt String Object which performs reverse operation.
// Var stringVal = ‘textValue’;
// Console.log(stringVal.reverse())

String.prototype.reverse = function(){
    this.reverse_string = ""
    for (let i=this.length-1;i>=0;i--){
        this.reverse_string += this[i];

    }
    return this.reverse_string;
};
print("hello".reverse())



// 6.Create a base class Shape. Create another classes(Rectangle & Circle) which inherits from shape.
// In shape area method will be there which will calculate the area of the shape. 
// Now when you write Rectangle.area, then the area related to rectangle will be displayed
// Same goes with circle.


class Shape{
    constructor(area){
        this.area = area
    }
    area_disp() {
        console.log("The area of the shape is "+this.area)
        
    }

}


class Rectangle extends Shape{
    constructor(length,breadth){
        super(0);
        this.length = length;
        this.breadth = breadth;
        this.area = length*breadth
        
    }
    show(){
        this.area_disp();
    }

}

class circle extends Shape{
    constructor(radius){
        super(0);
        this.radius = radius
        this.area = 3.141592*radius*radius;
        

    }
    show(){
        this.area_disp();
    }

    
}

let circe = new circle(1)
let rect = new Rectangle(2,6)
rect.show()
circe.show()
