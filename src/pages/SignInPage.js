import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

import { Button, ButtonGoogle } from '../components/button';
import FormGroup from '../components/common/FormGroup';
import { IconEyeToggle } from '../components/icons';
import Input from '../components/input';
import Label from '../components/label';
import useToggleValue from '../hooks/useToggleValue';
import LayoutAuthentication from '../layouts/LayoutAuthentication';

const schema = yup.object({
  email: yup.string().email('').required('This field is required!'),
  password: yup
    .string()
    .required('This field is required')
    .min(8, 'Password must be 8 characters')
});

const SignInPage = () => {
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, errors }
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema)
  });
  const { value: showPassword, handleToggleValue: handleShowPassword } =
    useToggleValue();

  const handleSignIn = (values) => {
    if (!isValid) return;
    console.log(values);
  };

  return (
    <LayoutAuthentication heading="Welcome Back!">
      <p className="mb-6 text-xs font-normal text-center text-text3 lg:mb-8 lg:text-sm">
        Don't have an account?{' '}
        <Link
          to="/sign-up"
          className="font-medium underline text-primary"
        >
          Sign up
        </Link>
      </p>
      <ButtonGoogle text="Sign in with Google" />
      <form onSubmit={handleSubmit(handleSignIn)}>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            name="email"
            type="email"
            placeholder="example@gmail.com"
            error={errors.email?.message}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            control={control}
            name="password"
            type={`${showPassword ? 'text' : 'password'}`}
            placeholder="Enter password"
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleShowPassword}
            />
          </Input>
        </FormGroup>
        <FormGroup>
          <span className="block text-sm font-medium text-right text-primary">
            Forgot password
          </span>
        </FormGroup>
        <Button
          type="submit"
          className="w-full bg-primary"
        >
          Sign in
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;
