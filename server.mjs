import http from "http";

const host = "localhost";
const port = 8000;

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
      console.log({ body });
      res.end("OK");
    });
  } else {
    res.end("hello from server");
  }
});

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
