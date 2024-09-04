interface IUserRegistration{
    email:string,
    password:string
}

interface IUserRecoveryPassword{
    email:string
}

interface IUserRegistrationResponse{
    message:string,
    code:number,
    data:string,
}