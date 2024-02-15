//.Create a class shape, create another class rectangle extend it with shape using typescript. Compile this and share converted output into ES5 version and display both the output.
class Shape{
    area:number;
    constructor(area){
        this.area=area;
    }
    display_area(){
        console.log(this.area)
    }
}

class rectangle extends Shape{
    length:number;
    breadth:number;
    constructor(l,b){
        super(0)
        this.length=l;
        this.breadth=b;
        this.area = l*b;
        

    }
    
}
class circle extends Shape{
    radius:number;
    
    constructor(r){
        super(0)
        this.radius=r;
        this.area=3.14*r*r;
        
        

    }
    
}

let circe = new circle(1)
let rect = new rectangle(12,2)
circe.display_area()
rect.display_area()
