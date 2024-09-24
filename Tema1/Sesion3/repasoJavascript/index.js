function calculateArea() {

    let baseTriangulo = document.getElementById('baseTriangulo').value;
    let alturaTriangulo = document.getElementById('alturaTriangulo').value;

    if ((baseTriangulo > 0) && (alturaTriangulo > 0)) {
        document.getElementById('resultDisplayer').textContent = `El área del triángulo es ${Number.parseFloat(baseTriangulo * alturaTriangulo / 2).toPrecision(2)}`;
    } else {
        document.getElementById('resultDisplayer').textContent = `ERROR: La base y la altura deben ser mayores que 0!!!`;

    }

}

function erase() {

    document.getElementById('baseTriangulo').value = "";
    document.getElementById('alturaTriangulo').value = "";
    document.getElementById('resultDisplayer').textContent = "";
}