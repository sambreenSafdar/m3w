'use client';
import ContainerWrapper from '@/components/container-wrapper';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import * as z from 'zod';
import PhoneInput from 'react-phone-number-input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import Image from 'next/image';

const formSchema = z.object({
  name: z.string().min(1, { message: 'Required' }),
  phone: z.string().min(1, { message: 'Required' }),
  email: z.string().email(z.string().min(1, { message: 'Required' })),
});

const QRForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setError(false);
    setSuccess(false);
    fetch('/api/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setLoading(false);
          setSuccess(true);
        } else {
          setLoading(false);
          setError(true);
        }
        form.reset();
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
      });
  };
  return (
    <div className="flex items-center flex-col justify-center">
      <div className="flex flex-col items-center w-full">
        <Link
          href="/"
          className="rounded-lg bg-secondary overflow-hidden px-3 py-1 mb-3"
        >
          <Image src="/logo.png" alt="logo" height={50} width={135} />
        </Link>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="font-light flex flex-col gap-3 w-full"
          >
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <Label>Full Name</Label>
                  <FormControl>
                    <Input
                      className="h-[54px] "
                      placeholder="Enter Your Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="font-light text-sm" />
                </FormItem>
              )}
            />
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <Label>Email Address</Label>
                  <FormControl>
                    <Input
                      className="h-[54px] "
                      placeholder="Enter Your Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="font-light text-sm" />
                </FormItem>
              )}
            />
            <FormField
              name="phone"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <Label>Mobile No</Label>
                  <FormControl>
                    <PhoneInput
                      className="h-[54px] border rounded-md pl-3 bg-white"
                      placeholder="(000) 000-00000"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="font-light text-sm" />
                </FormItem>
              )}
            />

            {success && (
              <div className="mt-3">
                <p className="text-sm text-green-500">
                  Your message has been sent.
                </p>
              </div>
            )}
            {error && (
              <div className="mt-3">
                <p className="text-sm text-red-500">
                  Something went wrong. Please try again.
                </p>
              </div>
            )}

            <div className="pt-4 gap-3">
              <Button
                className="h-[54px] px-12 w-full"
                disabled={loading}
                type="submit"
              >
                {loading ? 'LOADING...' : 'SEND'}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default QRForm;
