(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Hello;
    (function (Hello) {
        function hello() {
            const p = document.createElement("button");
            p.textContent = "hello";
            document.body.appendChild(p);
        }
        Hello.hello = hello;
    })(Hello = exports.Hello || (exports.Hello = {}));
});
//# sourceMappingURL=hello.js.map