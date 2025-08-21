import { UserRepository } from "../src/user-repository";
import { UserService } from "../src/user-service";

jest.mock("../src/user-repository.js");

const repository = new UserRepository();
const service = new UserService(repository);

test("Test Mock Class Save", () => {
    const user = { id: 1, name: "vicry"}
    service.save(user);
    expect(repository.save).toHaveBeenCalled();
    expect(repository.save).toHaveBeenCalledWith(user);
})

test("Test Mock Class FindById", () => {
    const user = { id: 1, name: "vicry"}
    repository.findById.mockReturnValueOnce(user);
    expect(service.findById(1)).toEqual(user);
    expect(repository.findById).toHaveBeenCalled();
    expect(repository.findById).toHaveBeenCalledWith(1);
})

test("Test Mock Class FindAll", () => {
    const users = [
        {id: 1, name: "vicry"},
        {id: 2, name: "john"}
    ]
    repository.findAll.mockReturnValueOnce(users);
    expect(service.findAll()).toEqual(users);
    expect(repository.findAll).toHaveBeenCalled();
})