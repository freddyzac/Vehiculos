// Definir la clase Vehículos
class Vehiculos {
    constructor(marca, modelo, color, año) {
      this.marca = marca;
      this.modelo = modelo;
      this.color = color;
      this.año = año;
    }
  
    // Método para mostrar la información del vehículo
    mostrarInfo() {
      console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Color: ${this.color}, Año: ${this.año}`);
    }
  }
  
  // Crear tres objetos de la clase Vehiculos
  let vehiculo1 = new Vehiculos("Toyota", "Corolla", "Rojo", 2020);
  let vehiculo2 = new Vehiculos("Ford", "Mustang", "Negro", 2021);
  let vehiculo3 = new Vehiculos("Chevrolet", "Camaro", "Azul", 2019);
  
  // Imprimir la información de los vehículos
  vehiculo1.mostrarInfo();
  vehiculo2.mostrarInfo();
  vehiculo3.mostrarInfo();
  