import { getAllProducts, getProductById } from "../src/database";
import { ProductService } from "../src/product-service";

jest.mock("../src/database.js", () => {
    const originalModule = jest.requireActual("../src/database.js");
    return {
        _esModule: true,
        ...originalModule,
        getAllProducts: jest.fn()
    }
})

test.failing("Test Mock Modules getProductById", () => {
    ProductService.findById(1);
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