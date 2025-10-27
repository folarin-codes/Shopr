

import { z } from 'zod';

const signInSchema = z
  .object({

    email: z
      .string()
      .trim()
      .min(1, 'Email is required')
      .email('Please enter a valid email address')
      .toLowerCase(), // Normalize email to lowercase
      

    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(20, 'Password is too long for remembrance')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
      .regex(/\d/, 'Password must contain at least one number')
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        'Password must contain at least one special character',
      ),

   
  })
 

export default signInSchema;

// Optional: Export type for TypeScript usage
export type SignUpFormData = z.infer<typeof signInSchema>;