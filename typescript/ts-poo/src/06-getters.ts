export class MyDate {
    

    constructor(
        public year: number = 1994, 
        public month: number = 12, 
        private _day: number = 10
    ) {}

    printFormat(): string {
        const day   = this.addPadding(this._day);
        const month = this.addPadding(this.month);
        return `${day}/${month}/${this.year}`;
    }

    add(amount: number, type: 'days' | 'months' | 'years') {
        if( type == 'days' ) {
            this._day += amount;
        }

        if( type == 'months' ) {            
            this.month += amount;
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

    get isLeapYear(): boolean {
        if (this.year % 400 == 0) return true;
        if (this.year % 100 == 0) return false;
        return this.year % 4 == 0;
    }

}

const myDate = new MyDate(1994,5,10);
console.log('1994', myDate.isLeapYear);
console.log(myDate.printFormat());
console.log(myDate.isLeapYear);
const myDate2 = new MyDate(2000,5,10);
console.log('2000', myDate2.isLeapYear);


