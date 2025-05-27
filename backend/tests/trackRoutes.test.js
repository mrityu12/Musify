import request from "supertest";
import app from "../server.js";

describe("GET /api/tracks/all", () => {
  it("should return all tracks", async () => {
    const res = await request(app).get("/api/tracks/all");
    expect(res.statusCode).toBe(200);
  });
});