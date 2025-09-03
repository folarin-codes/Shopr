import { z } from 'zod';


const signUpSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Full name can only contain letters and spaces")
       .refine(
      (value) => {
        const trimmed = value.trim();
        return trimmed.includes(' ');
      },
      "Full name must contain a space between first and last name"
    )
    .refine(
      (value) => {
        const words = value.trim().split(/\s+/);
        return words.length >= 2;
      },
      "Full name must contain at least two names"
    )
    .refine(
      (value) => {
        const words = value.trim().split(/\s+/);
        return words.every(word => word.length >= 2);
      },
      "Each name must be at least 2 characters long"
    ),
  
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(1, "Email is required"),
  
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(20, 'Password is too long for remembrance')
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/\d/, "Password must contain at least one number")
    .regex(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character")
});


export default signUpSchema