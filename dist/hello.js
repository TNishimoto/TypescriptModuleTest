export var Hello;
(function (Hello) {
    function hello() {
        const p = document.createElement("button");
        p.textContent = "hello";
        document.body.appendChild(p);
    }
    Hello.hello = hello;
})(Hello || (Hello = {}));
//# sourceMappingURL=hello.js.map