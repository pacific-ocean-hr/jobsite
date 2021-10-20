const mongoose = require("mongoose");
const User = require("../../db/index.js");
const request = require("supertest");
const app = require("../app.js");
const jwt = require("jwt-decode");
mongoose.connect("mongodb://localhost:27017/auth");

describe("Post /signup", () => {
  test("sholud response token with user information", async () => {
    await User.remove({ email: "test@test.com" });
    const response = await request(app).post("/api/signup").send({
      firstName: "first",
      lastName: "last",
      email: "test@test.com",
      password: "123",
      role: "seeker",
    });
    const user = jwt(response.text);
    expect(user.email).toBe("test@test.com");
  });
  test("should response user exist", async () => {
    const response = await request(app).post("/api/signup").send({
      firstName: "first",
      lastName: "last",
      email: "test@test.com",
      password: "123",
      role: "seeker",
    });
    expect(response.text).toBe("exist");
  });
});

describe("Post /signin", () => {
  test("sholud response incorrect", async () => {
    const response = await request(app).post("/api/signin").send({
      email: "test@test.com",
      password: "1234",
    });
    expect(response.text).toBe("incorrect");
  });
  test("sholud response token with user information", async () => {
    const response = await request(app).post("/api/signin").send({
      email: "test@test.com",
      password: "123",
    });
    const user = jwt(response.text);
    expect(user.email).toBe("test@test.com");
  });
});

afterAll((done) => {
  mongoose.connection.close();
  done();
});
