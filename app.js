    class ProductManager {
        constructor() {
        this.products = [];
        }
    
        addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("Todos los campos son obligatorios");
            return;
        }
    
        if (this.products.some(product => product.code === code)) {
            console.error("El código ya existe. No se permiten códigos duplicados");
            return;
        }
    
        const lastId = this.products.length > 0 ? this.products[this.products.length - 1].id : 0;
    
        const newProduct = {
            id: lastId + 1,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };
    
        this.products.push(newProduct);
    
        console.log(`Producto añadido: ${newProduct.title}`);
        }
    
        getProducts() {
        return this.products;
        }
    
        getProductById(id) {
        const foundProduct = this.products.find(product => product.id === id);
    
        if (foundProduct) {
            return foundProduct;
        } else {
            console.error("Producto no encontrado");
            return null;
        }
        }
    }
    

    const productManager = new ProductManager();
    

    const initialProducts = productManager.getProducts();
    console.log("Productos iniciales:", initialProducts);
    
    productManager.addProduct("Producto1", "Descripcion1", 200, "imagen1", "abc123", 25);
    
    const productsAfterAddition = productManager.getProducts();
    console.log("Productos:", productsAfterAddition);
    
    productManager.addProduct("Producto repetido", "Este es un producto repetido", 300, "Otra imagen", "abc123", 15);
    
    const productById = productManager.getProductById(1); 
    console.log("Producto por ID:", productById);
    
    const nonExistentProduct = productManager.getProductById(3); 
    