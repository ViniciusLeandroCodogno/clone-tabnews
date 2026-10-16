import orchestrator from "tests/orchestrator";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
});
describe("POST /api/v1/status", () => {
  describe("Anonymous user", () => {
    test("Retrieving current system status", async () => {
      const response = await fetch("http://localhost:3000/api/v1/status");
      expect(response.status).toBe(200);

      const responseBody = await response.json();

      const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
      expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

      const postgresVersion = "16.0";
      expect(responseBody.dependencies.database.version).toEqual(
        postgresVersion,
      );

      const maxConnections = 100;
      expect(responseBody.dependencies.database.max_connections).toEqual(
        maxConnections,
      );

      const openedConnections = 1;
      expect(responseBody.dependencies.database.opened_connections).toEqual(
        openedConnections,
      );
    });
  });
});
