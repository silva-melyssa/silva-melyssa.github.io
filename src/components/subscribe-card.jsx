'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import z from "zod";
import { useForm } from "react-hook-form";
import { useFormState } from 'react-dom'
import { zodResolver } from "@hookform/resolvers/zod";
import { subscribe } from "@/actions/subscribe";
import { cn } from "@/lib/utils";
import { FormButton } from "@/components/ui/form-button";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

const initialState = {
    state: 'pending',
    errors: {},
}

export function SubscribeCard() {
    const { toast } = useToast();

    const [state, formAction] = useFormState(subscribe, initialState);

    const formSchema = z.object({
        email: z.string().email(
            'invalid email address'
        ),
    });

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    });

    useEffect(() => {
        if (state.state === 'success') {
            toast({
                title: 'Subscribed!',
                description: 'You have been subscribed successfully',
            });
            form.reset();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);

    return (
        <Card>
            <CardHeader>
                <CardTitle className={'text-base'}>✉️ Stay up to date</CardTitle>
                <CardDescription className={'text-sm'}>
                    Get notified when I publish something new, and unsubscribe at any time.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form action={formAction} className={'flex flex-row items-start gap-x-2'}>
                        <div className={'flex-grow'}>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input type="email" placeholder="Your email" {...field}
                                                className={cn('', state.errors?.email && 'border-destructive')}
                                            />
                                        </FormControl>
                                        {state.errors?.email && (
                                            <FormMessage>
                                                {state.errors?.email}
                                            </FormMessage>
                                        )}
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormButton type="submit" variant={'secondary'}>
                            Subscribe
                        </FormButton>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
