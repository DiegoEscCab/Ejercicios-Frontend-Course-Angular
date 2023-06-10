var articulos = [
    {nombre: "Bicicleta", costo: 3000},
    {nombre: "Television", costo: 4500},
    {nombre: "Celular", costo: 3800},
    {nombre: "Libro", costo:320},
    {nombre: "Laptop", costo:20000},    
    {nombre: "Teclado", costo:500},
    {nombre: "Audifonos", costo:1700},
];

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});

var nombresArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

var encuentraArticulo = articulos.find(function(articulo){
    return  articulo.nombre === "Teclado"
});

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

articulos.forEach(function(articulo){
    console.log(articulo.costo);
});

/// este solo regresa un true si encuentra la condicion que estas especificando
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 3000;
});