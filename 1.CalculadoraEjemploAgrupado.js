var readline = require('readline');

// Configurar la interfaz de lectura y escritura en la terminal
var readConsole = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Calculadora");

// Primer numero
readConsole.question("Ingresa el primer número: ", function(num1Input) {
    var num1 = parseFloat(num1Input);

    if (isNaN(num1)) {
        console.log("Error: El valor ingresado no es un número válido.");
        readConsole.close();
        return;
    }

    // Selección de operación
    readConsole.question("Elige una operación (+, -, *, /): ", function(operacion) {
        
        if (operacion !== '+' && operacion !== '-' && operacion !== '*' && operacion !== '/') {
            console.log("Error: Operación no válida. Usa +, -, * o /.");
            readConsole.close();
            return;
        }

        // Segundo numero
        readConsole.question("Ingresa el segundo número: ", function(num2Input) {
            var num2 = parseFloat(num2Input);

            if (isNaN(num2)) {
                console.log("Error: El valor ingresado no es un número válido.");
                readConsole.close();
                return;
            }

            var resultado;

            // Calcular en bsae a la operaicón
            switch (operacion) {
                case '+':
                    resultado = num1 + num2;
                    break;
                case '-':
                    resultado = num1 - num2;
                    break;
                case '*':
                    resultado = num1 * num2;
                    break;
                case '/':
                    if (num2 === 0) {
                        console.log("Error: No se puede dividir entre cero.");
                        readConsole.close();
                        return;
                    }
                    resultado = num1 / num2;
                    break;
            }

            // Mostrar resultado de la operación
            console.log("Resultado: " + num1 + " " + operacion + " " + num2 + " = " + resultado);

            readConsole.close();
        });
    });
});