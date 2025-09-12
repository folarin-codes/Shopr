import { z } from 'zod';



const forgotPasswordSchema = z.object({

    email : z.string().min(4, 'minimum of 4 characters').email('Enter a valid email')

})


export default forgotPasswordSchema;