'use server';

import z from "zod";

const schema = z.object({
    email: z.string().email(
        'invalid email address'
    ),
});

export async function subscribe(previousState, formData) {
    console.log('Subscribing');
    const validatedFields = schema.safeParse({
        email: formData.get('email'),
    })

    // Return early if the form data is invalid
    if (!validatedFields.success) {
        return {
            state: 'error',
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    // Simulate 2 seconds wait
    await new Promise(resolve => setTimeout(resolve, 2000));

    return {
        state: 'success',
        errors: {},
    };
}
