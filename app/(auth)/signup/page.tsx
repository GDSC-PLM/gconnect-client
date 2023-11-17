// https://ui.shadcn.com/docs/components/form
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
})

export default function ProfileForm() {
    const form = useForm({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = () => {
        // Handle form submission
        console.log();
    };

    return (
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <h1>Sign Up using your University Email</h1>
            <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                    <Input placeholder="yourname@university.edu" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <Button type="submit">
            <Mail className="mr-2 h-4 w-4" /> Sign up using University Email
            </Button>
            <p>or <a href="">Login</a> instead.</p>
        </form>
        </Form>
    )
}
