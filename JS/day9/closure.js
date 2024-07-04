function parent() {
    const a = 10;
    function child() {
        console.log(a);
    }
    return child;
}
const closure = parent();
closure();