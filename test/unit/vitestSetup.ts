import server from "./mockServer/server";

beforeAll(() => {
  server.listen();

  Object.defineProperty(window, 'location', {
    writable: true,
    value: { href: 'http://localhost:3000/' },
  });
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
