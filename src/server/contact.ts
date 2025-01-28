"use server";

import { serverEnv } from "@/env/server";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(3, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(5, { message: "Message is required" }),
});

export async function submitContactForm(_prevState: any, formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const parsedData = contactFormSchema.safeParse(data);

  if (!parsedData.success) {
    return {
      message: parsedData.error.flatten().formErrors?.join(", "),
      errors: parsedData.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = parsedData.data;

  const web3formsApiKey = serverEnv.WEB3FORMS_API_KEY;
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: web3formsApiKey,
      name,
      email,
      message,
    }),
  });
  const result = await response.json();
  if (result.success) {
    return { message: "Message sent successfully" };
  }
  return { message: "Failed to send message" };
}
