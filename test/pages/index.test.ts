import cardsApi from "../../api/cardsApi";

describe("Login / Signup", () => {
  test("Login | Correct credentials", async () => {
    const data = await cardsApi.post("auth/signin", {
      email: "carlos@gmail.com",
      password: "12345678",
    });
    expect(data.status).toBe(200);
  });
});

export {};
