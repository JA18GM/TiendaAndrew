import { Injectable} from "@angular/core";
import { AbstractControl } from "@angular/forms";

@Injectable({ providedIn: 'root' })
export class BaseForm {
    constructor(){}

    isValidField(form: AbstractControl | null ){
        var flag = false;

        if(form)
        flag= form.touched || form.dirty && form.invalid;
        return flag;
    }

    getErrorMessage(form: AbstractControl | null) {
        let message = "";

        if(form) {
            const { errors} = form;
            if (errors){
                const messages: any={
                    required: 'Campo requerido',
                    email:'Formato invalido',
                    pettern: 'Formato invalido',
                    min: 'El rango no es correto',
                    max: 'El rango no es correcto',
                    minlength:'Formato invalido'
                }

                const errorkey = Object.keys(errors).find(Boolean);
                if (errorkey) message = messages[errorkey];
            }
        }
        return message;
    }
}