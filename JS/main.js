
const productos = [
    { id: 1, nombre: 'Proteinas', precio: 1000 },
    { id: 2, nombre: 'Creatina', precio: 2000 },
    { id: 3, nombre: 'Glutamina', precio: 3000 },
    { id: 4, nombre: 'L Carnitina', precio: 4000 },
  ];
  
  function obtenerProductoMasCaro(productos) {
    let productoMasCaro = productos[0];
    
    for (let i = 1; i < productos.length; i++) {
      if (productos[i].precio > productoMasCaro.precio) {
        productoMasCaro = productos[i];
      }
    }
    
    return productoMasCaro;
  }
  
  const productoMasCaro = obtenerProductoMasCaro(productos);
  console.log(`El producto más caro es ${productoMasCaro.nombre} y su precio es ${productoMasCaro.precio}`);
 
  let frascos = [
    { nombre: 'Proteinas', color: 'azul' },
    { nombre: 'Creatina', color: 'rojo' },
    { nombre: 'Glutamina', color: 'amarillo' },
    { nombre: 'L Carnitina', color: 'naranja' }
  ];
  
  function buscar() {
    let busqueda = document.getElementById('inputBusqueda').value.toLowerCase();
    let resultados = frascos.filter(frasco => frasco.nombre.toLowerCase().includes(busqueda));
  
    let listaResultados = document.getElementById('resultados');
    listaResultados.innerHTML = '';
  
    resultados.forEach(frasco => {
      let item = document.createElement('li');
      item.textContent = `Frasco: ${frasco.nombre} - Color: ${frasco.color}`;
      listaResultados.appendChild(item);
    });
  }
  
  //carrito de compras

  class Carrito {
    constructor() {
      this.items = []; 
    }
  
    agregarProducto(producto) {
      this.items.push(producto); 
    }
  
    quitarProducto(producto) {
      const index = this.items.indexOf(producto);
      if (index > -1) {
        this.items.splice(index, 1); 
      }
    }
  
    calcularTotal() {
      let total = 0;
      for (const producto of this.items) {
        total += producto.precio; 
      }
      return total;
    }
  }
  
  const producto1 = { nombre: 'Proteinas', precio: 1000 };
  const producto2 = { nombre: 'Creatina', precio: 2000 };
  const producto3 = { nombre: 'Glutamina', precio: 3000 };
  const producto4 = { nombre: 'L Carnitina', precio: 4000 };
  
  const carrito = new Carrito();
  
  carrito.agregarProducto(producto1);
  carrito.agregarProducto(producto2);
  carrito.agregarProducto(producto4);
 
  carrito.quitarProducto(producto1);

  const total = carrito.calcularTotal();
  
  console.log('Total de la compra:', total);
  
  
  
  
  
  
  
  
  