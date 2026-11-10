import {Component} from '@angular/core' 

import {
    FormControl,
    FormGroup,
    ReactiveFormsModule
} from '@angular/forms'


@Component({
    selector: 'app-registerUser',
    imports: [ReactiveFormsModule],
    templateUrl: './RegisterUser.html',
    styleUrl: './RegisterUser.css'
})

export class RegisterUser{

    form = new FormGroup({

        name: new FormControl('', { nonNullable: true }),

        email: new FormControl('', {nonNullable:true }),

        cpf: new FormControl('', {nonNullable:true}),

        password: new FormControl('', { nonNullable: true}),

        confirmPassword: new FormControl('', { nonNullable: true})

    });

    register(): void {
        const data = this.form.getRawValue();

        console.log('Dados do formulário: ', {
            name: data.name,
            email: data.email,
            cpf: data.cpf
        });

        console.log('Senha e confirmação foram capturadas, mas não serão exibidas.')
    }

}