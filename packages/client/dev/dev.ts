


/**
 * user role: customer
 */
interface СustomerRegistration{
    email: string,
    password: string
}
/**
 * user role: salesman
 */
interface SalesmanRegistration extends СustomerRegistration{
    firstName: string,
    surName: string
}




export default 0;
