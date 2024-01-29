import z from "zod";

export const contactSchema = z.object({
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
  message: z
    .string({ required_error: "Message is required" })
    .trim()
    .min(10, { message: "Message must be at least of 10 chracters " })
    .max(255, { message: "Message must not be more than 255 characters" }),
});
