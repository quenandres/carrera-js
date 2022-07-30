export class MyDate {
    

    constructor(
        public year: number = 1994, 
        private _month: number = 12, 
        private _day: number = 10
    ) {}

    printFormat(): string {
        const day   = this.addPadding(this._day);
        const month = this.addPadding(this._month);
        return `${day}/${month}/${this.year}`;
    }

    add(amount: number, type: 'days' | 'months' | 'years') {
        if( type == 'days' ) {
            this._day += amount;
        }

        if( type == 'months' ) {            
            this._month += amount;
        }

        if( type == 'years' ) {
            this.year += amount;
        }
    }

    private addPadding(value: number) {
        if( value < 10 ) {
            return `0${value}`;
        } 
        return `${value}`;
    }

    get day() {
        return this._day;
    }

    get month() {
        return this._month;
    }

    get isLeapYear(): boolean {
        if (this.year % 400 == 0) return true;
        if (this.year % 100 == 0) return false;
        return this.year % 4 == 0;
    }

    // Este set no debe retornar nada y siempre debe recibir un parametro    
    set month(newValue: number) {
        if( newValue >=1 && newValue <= 12 ) {
            this._month = newValue;
        } else {
            throw new Error('month out of range');
        }
    }

}

const myDate = new MyDate(1994,5,10);
console.log(myDate.printFormat());
myDate.month = 78;

