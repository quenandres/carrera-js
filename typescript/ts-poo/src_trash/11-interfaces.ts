export interface Driver {
    database: string;
    password: string;
    port: number;
    connect(): void;
    disconnect(): void;
    isConnected(name: string): boolean;
}

/* const driver: Driver = {
    database: '',
    password: '',
    port: 23
} */

class PostgresDriver implements Driver {
    constructor(
        public database: string,
        public password: string,
        public port: string
    ){}

    connect(): void {
        
    }
}


class OracleDriver implements Driver {
    constructor(
        public database: string,
        public password: string,
        public port: string
    ){}
    connect(): void {
        throw new Error("Method not implemented.");
    }
    disconnect(): void {
        throw new Error("Method not implemented.");
    }
    isConnected(name: string): boolean {
        throw new Error("Method not implemented.");
    }
    
}