const http = require("http");
const mysql = require("mysql");

let connect_db = false;

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "shreeshringar",
});

let result = {};

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  connect_db = true;
  con.query("SELECT * FROM products", function (err, res, fields) {
    console.log(res);
    result = res;
  });

  const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(result));
  });

  const PORT = 1600;
  server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
    console.log(result);
  });
});
