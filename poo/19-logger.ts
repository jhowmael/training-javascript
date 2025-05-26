/* Exercício 19: Crie uma classe Singleton Logger.
Ela deve garantir que apenas uma instância do logger exista.*/

class Logger {
    private static instance: Logger;

    private constructor() {}

    static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    log(message: string): void {
        console.log(`[LOG]: ${message}`);
    }
}

const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

logger1.log("First message");
logger2.log("Second message");

console.log("Same instance?", logger1 === logger2);
