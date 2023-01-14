import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import Button from '../components/button';
import FormGroup from '../components/common/FormGroup';
import Input from '../components/input';
import Label from '../components/label';
import LayoutAuthentication from '../layouts/LayoutAuthentication';

const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting }
  } = useForm({});

  const handleSignUp = (values) => {
    console.log(values);
  };

  return (
    <LayoutAuthentication heading="Sign Up">
      <p className="mb-6 text-xs font-normal text-center text-text3 lg:mb-8 lg:text-sm">
        Already have an account?{' '}
        <Link
          to="/sign-in"
          className="font-medium underline text-primary"
        >
          Sign in
        </Link>
      </p>
      <button className="flex items-center justify-center w-full py-4 mb-5 text-base font-semibold border gap-x-3 border-strock rounded-xl text-text2">
        <img
          srcSet="/icon/google.png 2x"
          alt="icon-google"
        />
        <span>Sign up with google</span>
      </button>
      <p className="mb-4 text-xs font-normal text-center lg:text-sm lg:mb-8 text-text2">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label htmlFor="name">Full name *</Label>
          <Input
            control={control}
            name="name"
            placeholder="John Doe"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            name="email"
            type="email"
            placeholder="john@example.io"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            control={control}
            name="password"
            type="password"
            placeholder="Create a password"
          />
        </FormGroup>
        <div className="flex items-start mb-5 gap-x-5">
          <span className="w-5 h-5 border rounded border-text4"></span>
          <p className="flex-1 text-sm text-text2">
            I agree to the{' '}
            <span className="underline cursor-pointer text-secondary">
              Terms of Use
            </span>{' '}
            and have read and understand the{' '}
            <span className="underline cursor-pointer text-secondary">
              Privacy policy
            </span>
          </p>
        </div>
        <Button
          type="submit"
          className="w-full bg-primary"
        >
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
