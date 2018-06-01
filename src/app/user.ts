export class User {
    username: string;
    email: string;
    password:{
        password: string,
        confirmPassword: string
    }
    gender: string;
    agree: boolean;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}