interface IUserRegistration{
    email:string,
    password:string,
    firstName:string,
    lastName:string,
    country:string,
    termAndCondition:boolean
}

interface IUserLogin{
    email:string,
    password:string,    
}

interface IUserRecoveryPassword{
    email:string
}

interface IUserRegistrationResponse{
    message:string,
    code:number,
    data:string,
}