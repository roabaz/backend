const fs = require("fs");
const path = require("path");

class ProductManager {
  constructor() {
    this.products = [];
    this.file = path.join(__dirname, "products.json");
  }
  fileExists() {
    return fs.existsSync(this.file);
  }
  addUser(user) {
    return new Promise((resolve, reject) => {
      if (this.fileExists()) {
        console.log("El archivo existe");
        fs.readFile("./products.json", (err, data) => {
          if (err) {
            return console.log("Error al leer el archivo");
          }
          this.products = JSON.parse(data);
          this.products.push(user);
          fs.writeFile(
            "./products.json",
            JSON.stringify(this.products),
            (err) => {
              if (err) {
                return console.log("Error al escribir el archivo");
              }
              resolve();
            }
          );
        });
      } else {
        this.products.push(user);
        fs.writeFileSync(this.file, JSON.stringify(this.products), "utf8");
        resolve();
      }
    });
  }
  getProductById(id) {
    return new Promise((resolve, reject) => {
      fs.readFile(this.file, "utf8", (err, data) => {
        if (err) {
          reject(err);
        }
        this.products = JSON.parse(data);
        const user = this.products.find((user) => user.id === id);
        resolve(user);
      });
    });
  }
  getproducts() {
    return new Promise((resolve, reject) => {
      fs.readFile(this.file, "utf8", (err, data) => {
        if (err) {
          reject(err);
        }
        this.products = JSON.parse(data);
        resolve(this.products);
      });
    });
  }

  deleteProductById(id) {
    return new Promise((resolve, reject) => {
      fs.readFile(this.file, "utf8", (err, data) => {
        if (err) {
          reject(err);
        }
        this.products = JSON.parse(data);
        this.products = this.products.filter((user) => user.id !== id);
        fs.writeFile(
          "./products.json",
          JSON.stringify(this.products),
          (err) => {
            if (err) {
              return console.log("Error al escribir el archivo");
            }
            resolve();
          }
        );
      });
    });
  }

  updateProduct(id) {
    return new Promise((resolve, reject) => {
      fs.readFile(this.file, "utf8", (err, data) => {
        if (err) {
          reject(err);
        }
        this.products = JSON.parse(data);

        this.products = this.products.map((element, i) => {
          if (element.id = id) {
            element.title = "CODERHOUSE NAME!!!!";
          }
          fs.writeFile(
            "./products.json",
            JSON.stringify(this.products),
            (err) => {
              if (err) {
                return console.log("Error al escribir el archivo");
              }
              resolve();
            }
          );
        });
      });
    });
  }
}
module.exports = ProductManager;
