
export namespace Hello{
    export function hello(){
        const p = document.createElement("button");
        p.textContent = "hello";
        document.body.appendChild(p);
    }
}