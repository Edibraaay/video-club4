const express = require('express');

// RESTFULL => GET, POST, PUT, PATCH, DELETE = Modelo
// representacion de una estructura de datos
function sumar (req, res, next) {
  const n = parseFloat(req.params.n);
  const n1 = parseFloat(req.params.n1);
  const resultado = parseFloat(n+n1);
  res.send(`Sumando ${n} +${n1} es ${resultado}`);
}

function multiplicar(req, res, next) {
  const n = parseFloat(req.body.n);
  const n1 = parseFloat(req.body.n1);
  const resultado = parseFloat(n*n1);
  res.send(`Multiplicando ${n} por ${n1} es ${resultado}`);
}

function dividir(req, res, next) {
  const n = parseFloat(req.body.n);
  const n1 = parseFloat(req.body.n1);
  if(n1 == 0){
    res.send('No se puede dividir entre 0');
  } 
  else {
    let resultado = parseFloat(n/n1);
    res.send(`Diviendo  ${n} / ${n1} obtenemos ${resultado}`);
  }
}

function potencia(req, res, next) {
  const n = parseFloat(req.body.n);
  const n1 = parseFloat(req.body.n1);
  const resultado = parseFloat(Math.pow(n1, n2));
  res.send(`Elevando ${n} a la ${n1} obtenemos ${resultado}`);
}


function restar(req, res, next) {
  const n = parseFloat(req.params.n);
  const n1 = parseFloat(req.params.n1);
  const resultado = parseFloat(n-n1);
  res.send(`La resta de ${n} - ${n1} es ${resultado}`);
}


module.exports = {
  sumar, multiplicar, dividir, potencia, restar
}