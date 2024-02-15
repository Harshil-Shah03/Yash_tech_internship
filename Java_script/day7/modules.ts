// 5. Create a Modules.ts
// Add two classes Addition and Subtraction
// Create sum and subtract methods in respective class
// Import the modules inside others file and execute the sum and subtract methods.
export class Addition{
    a:number;
    b:number;
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
    add(){
        return this.a+this.b;

    }

}

export class Subtraction{
    a:number;
    b:number;
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
    sub(){
        return this.a-this.b;

    }


}