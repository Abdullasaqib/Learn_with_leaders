import { z } from 'zod';

export const AuthSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" })
});

export const ProfileUpdateSchema = z.object({
    full_name: z.string().min(2, "Name must be at least 2 characters"),
    avatar_url: z.string().url("Invalid URL").optional().or(z.literal(''))
});

export const ApplicationSchema = z.object({
    program_id: z.string().uuid(),
    user_id: z.string().uuid()
});
