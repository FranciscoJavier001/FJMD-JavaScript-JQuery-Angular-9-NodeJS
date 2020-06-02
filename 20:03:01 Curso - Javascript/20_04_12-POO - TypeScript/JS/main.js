var Main = /** @class */ (function () {
    function Main() {
        console.log("Aplicacion JS Cargada!");
    }
    Main.prototype.getCamiseta = function () {
        return new Camiseta("Rojo", "fasdf", "fasdF", "FAsdf", 12);
    };
    return Main;
}());
var main = new Main();
