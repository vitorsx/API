import { Router } from "express";
import { somar, dobro, cor, ingresso, text } from "./services.js";
import { maiornumero } from "./services.js";

const server = Router();

// endpoints
// dobro with route parameters
server.get("/dobro/:numero", (req, resp) => {
  resp.send({
    dobro: dobro(Number(req.params.numero)),
  });
});

// soma with query parameters
server.get("/soma", (req, resp) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  const x = somar(a, b);
  resp.send({
    soma: x,
  });
});

// soma with body parameters
server.post("/soma", (req, resp) => {
  try {
    const { a, b } = req.body;
    resp.send({
      soma: somar(a, b),
    });
  } catch (err) {
    resp.status(400).send({
      erro: err.message,
    });
  }
});

server.get("/corprimaria/:cor", (req, resp) => {
  const color = req.params.cor;
  resp.send({
    primaria: cor(color),
  });
});

server.post("/ingresso", (req, resp) => {
  const { inteira, meia, dia, nacionalidade } = req.body;
  resp.send({
    total: ingresso(inteira, meia, dia, nacionalidade),
  });
});

server.get("/texto/:txt/:caracter", (req, resp) => {
  const t = req.params.txt
  const c = req.params.caracter
  resp.send({
    valor: text(t, c)
  })
});

server.post("/maior", (req, resp) => {
  const numero = req.body
  const x = maiornumero(numero)
  resp.send({
    maior: x
  })
})

export default server;
