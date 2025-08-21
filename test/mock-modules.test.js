import { getAllProducts, getProductById } from "../src/database"
import { ProductService } from "../src/product-service"

jest.mock("../src/database.js");

test("Test Mock Modules getProductById", () => {
    getProductById.mockImplementation((id) => {
        return {id: id, name: "Product Mock"}
    })

    const product = ProductService.findById(1);
    expect(product).toEqual({id: 1, name: "Product Mock"});
})

test("Test Mock Modules getAllProducts", () => {
    const products = [
        {id: 1, name: "Product Mock 1"},
        {id: 2, name: "Product Mock 2"},
        {id: 3, name: "Product Mock 3"}
    ]

    getAllProducts.mockReturnValue(products);
    expect(ProductService.findAll()).toEqual(products);
})