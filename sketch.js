function setup() {
    let a = new Matrix(2,2);
    a.randomize();
    a.print();

    function doubleIt(x){
        return x*2;
    }

    a.map(doubleIt);
    a.print();
}
