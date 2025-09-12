

import { z } from 'zod';


const resetPasswordSchema = z.object({
    passwordOne: z.string()
        .min(8, 'Must have a minimum of 8 characters')
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, 
               'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'),
    passwordTwo: z.string()
        .min(8, 'Must have a minimum of 8 characters')
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, 
               'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character')
})

export default resetPasswordSchema;