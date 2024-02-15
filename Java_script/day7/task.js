var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//.Create a class shape, create another class rectangle extend it with shape using typescript. Compile this and share converted output into ES5 version and display both the output.
var Shape = /** @class */ (function () {
    function Shape(area) {
        this.area = area;
    }
    Shape.prototype.display_area = function () {
        console.log(this.area);
    };
    return Shape;
}());
var rectangle = /** @class */ (function (_super) {
    __extends(rectangle, _super);
    function rectangle(l, b) {
        var _this = _super.call(this, 0) || this;
        _this.length = l;
        _this.breadth = b;
        _this.area = l * b;
        return _this;
    }
    return rectangle;
}(Shape));
var circle = /** @class */ (function (_super) {
    __extends(circle, _super);
    function circle(r) {
        var _this = _super.call(this, 0) || this;
        _this.radius = r;
        _this.area = 3.14 * r * r;
        return _this;
    }
    return circle;
}(Shape));
var circe = new circle(1);
var rect = new rectangle(12, 2);
circe.display_area();
rect.display_area();
