import { Router } from "express";
import { somar, dobro, cor, ingresso, text } from "./services.js";
import { maiornumero } from "./services.js";

const server = Router();

// endpoints
// dobro with route parameters
server.get("/dobro/:numero", (req, resp) => {
  try {
    resp.send({
      dobro: dobro(Number(req.params.numero)),
    });
  } catch (err) {
    resp.status(500).send({
      error: err.message,
    });
  }
});

// soma with query parameters
server.get("/soma", (req, resp) => {
  try {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    const x = somar(a, b);
    resp.send({
      soma: x,
    });
  } catch (err) {
    resp.status(500).send({
      error: err.message,
    });
  }
});

// soma with body parameters
server.post("/soma", (req, resp) => {
  try {
    const { a, b } = req.body;
    resp.send({
      soma: somar(a, b),
    });
  } catch (err) {
    resp.status(500).send({
      erro: err.message,
    });
  }
});

server.get("/corprimaria/:cor", (req, resp) => {
  try {
    const color = req.params.cor;
    resp.send({
      primaria: cor(color),
    });
  } catch (err) {
    resp.status(500).send({
      error: err.message,
    });
  }
});

server.post("/ingresso", (req, resp) => {
  try {
    const { inteira, meia, dia, nacionalidade } = req.body;
    resp.send({
      total: ingresso(inteira, meia, dia, nacionalidade),
    });
  } catch (err) {
    resp.status(500).send({
      error: err.message,
    });
  }
});

server.get("/texto/:txt/:caracter", (req, resp) => {
  try {
    const t = req.params.txt;
    const c = req.params.caracter;
    resp.send({
      valor: text(t, c),
    });
  } catch (err) {
    resp.status(500).send({
      error: err.message,
    });
  }
});

server.post("/maior", (req, resp) => {
  try {
    const numero = req.body;
    const x = maiornumero(numero);
    resp.send({
      maior: x,
    });
  } catch (err) {
    resp.status(500).send({
      error: err.message,
    });
  }
});

export default server;
