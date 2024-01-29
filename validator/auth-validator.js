import z from "zod";

export const registerSchema = z.object({
  username: z
    .string({ required_error: "Name is requred" })
    .trim()
    .min(3, { message: "Name must be at least of 3 chracters " })
    .max(255, { message: "Name must not be more than 255 characters" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least of 3 chracters " })
    .max(255, { message: "Email must not be more than 255 characters" }),
  phone: z
    .string({ required_error: "Phone is requred" })
    .trim()
    .min(10, { message: "Phone must be at least of 10 chracters " })
    .max(20, { message: "Phone must not be more than 20 characters" }),
  password: z
    .string({ required_error: "Password is requred" })
    .min(7, { message: "Password must be at least of 6 chracters " })
    .max(1024, { message: "Password must not be more than 1024 characters" }),
});

export const loginSchema = z.object({

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least of 3 chracters " })
    .max(255, { message: "Email must not be more than 255 characters" }),
  password: z
    .string({ required_error: "Password is requred" })
    .min(7, { message: "Password must be at least of 6 chracters " })
    .max(1024, { message: "Password must not be more than 1024 characters" }),
});

