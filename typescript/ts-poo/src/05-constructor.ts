export class MyDate {
    

    constructor(
        public year: number = 1994, 
        public month: number = 12, 
        private day: number = 10
    ) {}

    printFormat(): string {
        const day   = this.addPadding(this.day);
        const month = this.addPadding(this.month);
        return `${day}/${month}/${this.year}`;
    }

    add(amount: number, type: 'days' | 'months' | 'years') {
        if( type == 'days' ) {
            this.day += amount;
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

    getDay() {
        return this.day;
    }

}

const myDate = new MyDate(1994,5,10);
console.log(myDate.printFormat());
console.log(myDate.getDay());
const myDate2 = new MyDate();
console.log(myDate2.printFormat());
const myDate3 = new MyDate(2000);
console.log('2000 => ', myDate3.printFormat());
const myDate4 = new MyDate(2000,7);
console.log('2000, 7 => ', myDate4.printFormat());

