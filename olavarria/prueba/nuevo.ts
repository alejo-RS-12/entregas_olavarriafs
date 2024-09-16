
function sumarArreglo(arr: number[]): number {
    return arr.reduce((a, b) => a + b, 0);
}
function obtenerPromedio(arr:number[]): string {    
    let suma: number = sumarArreglo(arr);
    let promedio: number = suma / arr.length;
    return "" + promedio;
}
