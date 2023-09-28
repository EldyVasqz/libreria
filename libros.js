// Cree el array libros con al menos 5 nombres
let libros = ["Libro A", "Libro B", "Libro C", "Libro D", "Libro E"];

// Cree la función para agregar un libro al final del array
function agregarLibro(libro) {
  libros.push(libro);
}

// Cree la función para eliminar un libro en una posición específica del array
function eliminarLibro(posicion) {
  if (posicion >= 0 && posicion < libros.length) {
    libros.splice(posicion, 1);
  } else {
    console.log("Error: La posición proporcionada no es válida.");
  }
}

// Cree la función para mostrar un libro en una posición específica
function mostrarLibrosEnPosicion(posicion) {
  if (posicion >= 0 && posicion < libros.length) {
    console.log(libros[posicion]);
  } else {
    console.log("Error: La posición proporcionada no es válida.");
  }
}

console.log("Array inicial:", libros);

agregarLibro("Libro 6"); 
console.log("Después de agregar un libro:", libros);

eliminarLibro(2); 
console.log("Después de eliminar un libro:", libros);

mostrarLibrosEnPosicion(0); 
mostrarLibrosEnPosicion(10); 
