class Polígono{
    constructor(lados, operación)
    {
        this.lados = lados;
        this.medida = this.medida;
    }
}

class Triangulo extends Poligono{
    area(){
        if (this.lados.medida === 3)
        {
            const [a, b, c] = this.lados;
            const l = this.perimetro() / 2;
            return Math.sqrt(l * (l - a) * (l - b) * (l - c));
        }
        else{
            return "Área no calculada";
        }
    }

    perimetro()
    {
        return this.lados.reduce((a, b) => a + b, 0)
    }
}

console.log(Triangulo);

class Cuadrado extends Poligono{
    area(){
        if (this.lados.medida === 4)
        {
            const [a, b, c, d] = this.lados;
            const l = medida;
            return Math.sqrt(l * l);
        }
        else{
            return "Área no calculada";
        }
    }

    perimetro()
    {
        return this.lados.reduce(l * 4)
    }
}

console.log(Cuadrado);

class Pentágono extends Poligono{
    area(){
        if (this.lados.medida === 5)
        {
            const [a, b, c, d, e] = this.lados;
            const l = medida;
            const apotema = l / (2 * Math.tan())
            return Math.sqrt((l * apotema) / 2);
        }
        else{
            return "Área no calculada";
        }
    }

    perimetro()
    {
        return this.lados.reduce(l * 5)
    }
}

console.log(Pentágono);