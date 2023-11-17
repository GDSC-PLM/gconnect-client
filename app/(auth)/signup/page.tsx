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
    email: z.string().email({
        message: "Invalid email address",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
    // might need to add username later
    // username: z.string().min(2, {
    //     message: "Username must be at least 2 characters.",
    // }),
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
        <h1 className="text-center text-xl lg:text-2xl  mt-20 mb-8 font-semibold">Sign Up using your University Email</h1>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-80">
            <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Email</FormLabel>
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
            <Button type="submit" variant='purple' className="w-full">
            <Mail className="mr-2 h-4 w-4" /> Sign up using University Email
            </Button>
            <p className="text-center">or <a href="" className="font-semibold">Login</a> instead.</p>
        </form>
        </Form>
    )
}
