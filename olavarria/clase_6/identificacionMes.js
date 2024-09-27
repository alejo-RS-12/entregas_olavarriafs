"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var arregloMes = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
var nroMes = rls.questionInt("Indique el numero de mes que le interesa: ");
var indice = nroMes - 1;
console.log("el mes es " + arregloMes[indice]);
