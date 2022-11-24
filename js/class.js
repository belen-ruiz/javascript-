


//class constructora
class Producto {
  constructor(id, cat, talle, gen, precio) {
    (this.id = id),
      (this.cat = cat),
      (this.talle = talle),
      (this.gen = gen),
      (this.precio = precio);
  }
  mostrarDatos() {
    console.log(`Caracteristicas de éste/a ${this.cat}:
                Articulo #${this.id}
                Talle: ${this.talle}
                Género: ${this.gen}
                Precio: $${this.precio}`);
  }
  sumarIva() {
    this.precioIva = this.precio * 1.21;
  }
}

class Persona {
  constructor(nombre, apellido, email, mensaje) {
    (this.nombre = nombre),
      (this.apellido = apellido),
      (this.email = email),
      (this.mensaje = mensaje);
  }
  mostrarData() {
    console.log(`Persona:
                 Nombre #${this.nombre}
                 Talle: ${this.apellido}
                 email: ${this.email}
                 mensaje: $${this.mensaje}`);
  }
}


class Cuenta {
    constructor(nombre, email, password) {
      (this.nombre = nombre),
        (this.email = email),
        (this.password = password);
    }
    mostrarData() {
      console.log(`Persona:
                   Nombre #${this.nombre}
                   email: ${this.email}
                   mensaje: $${this.password}`);
    }
  }



// //catalogo
// const producto1 = new Producto(1, "Remera London", "S", "Rojo", "Unisex", 1990);
// const producto2 = new Producto(2, "Remera Paris", "M", "Verde", "Niño", 1299);
// const producto3 = new Producto(3, "Pantalon Buenos Aires", "XL", "Verde", "Niño", 1599);
// const producto4 = new Producto(4, "Pantalon Berlin", "M", "Rojo", "Niña", 1499);
// const producto5 = new Producto(5, "Buzo Amsterdam", "L", "Violeta", "Niña", 2199);
// const producto6 = new Producto(6, "Buzo Rome", "S", "Violeta", "Unisex", 2599);


//array de stock
let deposito = []

const cargarDeposito = async()=>{
    const response = await fetch("productos.json")
    const data = await response.json()
    console.log(data)
    for(let producto of data){
        let productoNuevo = new Producto(producto.id, producto.cat, producto.talle, producto.gen, producto.precio)
        deposito.push(productoNuevo)
    }
}
//inicializar estanteria con operador OR 
if(localStorage.getItem("deposito")){
  deposito = JSON.parse(localStorage.getItem("deposito"))
}else{
    console.log("Seteando el array por primera vez")
    cargarDeposito()
    console.log(deposito)
    localStorage.setItem("deposito", JSON.stringify(deposito))
  }
