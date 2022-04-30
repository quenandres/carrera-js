(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
    interface htmlProps {
        id   : string,
        type : HtmlType
    }
    class HtmlElement {

        public id   : string;
        public type : HtmlType;

        constructor({
            id,
            type,
        }: htmlProps) {
            this.id   = id;
            this.type = type;
        }
    }

    interface inputAttibutesProps {
        value      : string,
        placeholder: string
    }

    class InputAttributes {
        public value       : string;
        public placeholder : string;

        constructor({
            value,
            placeholder,
        }:inputAttibutesProps) {
            this.value = value;
            this.placeholder = placeholder;
        }
    }

    class InputEvents {
        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }


    interface InputElementSettings {
        id: string,
        type: HtmlType,
        value: string,
        placeholder: string,
    }

    class InputElement {

        htmlElement     : HtmlElement;        
        inputAttributes : InputAttributes;

        constructor({
            id,
            type,
            value,
            placeholder 
        }: InputElementSettings) {
            this.htmlElement     = new HtmlElement({id, type});
            this.inputAttributes = new InputAttributes({value, placeholder});
        }
    }

    //? Idea para la nueva clase InputElement

    const nameField = new InputElement({value: 'Fernando', placeholder:'Enter first name', id:'1', type:'select'});

    console.log({ nameField });

})()