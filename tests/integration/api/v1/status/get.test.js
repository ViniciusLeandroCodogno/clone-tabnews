test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  const parsedUpdateAt = new Date(responseBody.update_at).toISOString();
  expect(responseBody.update_at).toEqual(parsedUpdateAt);

  const postgresVersion = "16.0";
  expect(responseBody.dependencies.database.version).toEqual(postgresVersion);

  const maxConnections = 100;
  expect(responseBody.dependencies.database.max_connections).toEqual(
    maxConnections,
  );

  const openedConnections = 1;
  expect(responseBody.dependencies.database.opened_connections).toEqual(
    openedConnections,
  );
});
