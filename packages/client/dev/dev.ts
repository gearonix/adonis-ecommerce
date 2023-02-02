


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
interface SalesmanRegistration extends СustomerRegistration {
    firstName: string,
    surName: string
}


export default 0;


//DATABASE

interface Users {
    role: 'customer' | 'salesman',
    username: string,
    email: string,
    password: string,
    avatar: string,
    background: string,
    description: string,
    user_id: string,
    country: string,
    city: string
}

interface Products {
    name: string,
    price: number,
    rating: number,
    description: string,
    inStock: boolean,
    images: string[],
    purchasesCount: number,
    salesman_id: string,
    features: string[],
    material: string,
    type: string,
    design: string,
    warrantyCount: number,
    model: string,
    size: string
}


interface Posts {
    date: string,
    message: string,
    user_id: string,
    image: string,
    post_id: string,
    likes: number
}


interface Comments extends Posts {
    comment_id: string
}


function delete_cookie(name: string) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
