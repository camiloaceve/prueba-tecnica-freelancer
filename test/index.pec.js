import request from "supertest"
import app from "../src/index"

describe("GET /api/book/find", () => {
	test("should respond with a 200 status code", async () => {
		const response = await request(app).get("/api/book/find").send()
		expect(response.statusCode).toBe(200)
	})

	test("should respond an array", async () => {
		const response = await request(app).get("/api/book/find").send()
		expect(response.body).toBeInstanceOf(Array)
	})
})
