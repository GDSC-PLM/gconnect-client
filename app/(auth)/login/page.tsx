'use client';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  email: z.string().email({
    message: 'Invalid email address',
  }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters.',
  }),
  // Might need to add username later
  // username: z.string().min(2, {
  //     message: "Username must be at least 2 characters.",
  // }),
});

export default function Login() {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = () => {
    // Handle form submission
    console.log();
  };

  return (
    <Container className='flex flex-col h-screen w-full items-center justify-center'>
      <Link href='/'>
        <Image
          src='/gconnect-logo.svg'
          alt='GConnect Logo'
          width='0'
          height='0'
          sizes='100vw'
          className='h-auto w-[4rem] mb-20 object-cover transition-all duration-100 ease-in-out hover:animate-pulse'
        />
      </Link>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-8 w-[18.75rem]'
        >
          <div className='text-center'>
            <h1 className='text-2xl lg:text-4xl font-semibold mb-2'>Log In</h1>
            <p className='text-zinc-400 mb-10'>Use your University Email</p>
          </div>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='yourname@university.edu' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type='password' placeholder='••••••••' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit' variant='purple' className='w-full'>
            <Mail className='mr-2 h-4 w-4' /> Log In using University Email
          </Button>
          <p className='text-center'>
            or{' '}
            <Link href='/signup' className='font-semibold'>
              Sign Up
            </Link>{' '}
            instead.
          </p>
        </form>
      </Form>
    </Container>
  );
}
