"use client";

import React from "react";
import { signIn } from "next-auth/react";
import { userSignInValidation } from "@/lib/validations/auth";
import Link from "next/link";
import * as z from "zod";
import { useForm } from "react-hook-form";
import {
  Button,
  Input,
  Label,
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui";

interface SignInFormProps {
  callbackUrl: string;
}

interface FormValues {
  email: string;
  password: string;
}

const SignInForm = ({ callbackUrl }: SignInFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      userSignInValidation.parse(data);
      await signIn("credentials", {
        email: data.email,
        password: data.password,
        callbackUrl,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card className="max-w-md mx-auto mt-10 p-6 shadow-lg">
      <CardHeader className="text-center">
        <h2 className="text-2xl font-semibold">Sign In</h2>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="mail@example.com"
              {...register("email")}
              className="mt-1"
            />
            {errors.email && (
              <p className="text-red-600 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="your password"
              {...register("password")}
              className="mt-1"
            />
            {errors.password && (
              <p className="text-red-600 text-sm">{errors.password.message}</p>
            )}
          </div>
          <Button className="w-full mt-4" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Sign In"}
          </Button>
        </form>
        {/* <Divider className="my-4">or</Divider> */}
        <Button
          className="w-full mt-2"
          variant="outline"
          onClick={() => signIn("google", { callbackUrl })}
        >
          Sign in with Google
        </Button>
        <p className="text-center text-sm text-gray-600 mt-2">
          Don&apos;t have an account?&nbsp;
          <Link className="text-blue-600 hover:underline" href="/signup">
            Sign Up
          </Link>
        </p>
      </CardContent>
    </Card>
  );
};

export default SignInForm;
