type Size = ''|'S'|'M'|'L'|'XL';
class Product {
    constructor(
        public name:string,
        public price:number = 0,
        public size: Size = ''
    ){}

    isProductReady():boolean{
        for( const key in this ){
            switch(typeof this[key]) {
                case 'string':
                    if( (<string><unknown>this[key]).length ) throw Error(`${this[key]} is empty`);
                break;
                case 'number':
                    if( (<number><unknown>this[key]) <=0 ) throw Error(`${this[key]} is empty`);
                break;
                default:
                    throw Error(`${ typeof this[key] } is not valid`);
            }
        }
        return true;
    }

    toString() {
        // Usando DRY
        if( !this.isProductReady ) return;
        return `${this.name} (${this.price}), ${this.size}`;
    }
}

(() => {
    const bluePants = new Product('blue large pants',10,'L');
    console.log(bluePants.toString());
})();