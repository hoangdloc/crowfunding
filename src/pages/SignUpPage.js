import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

import { Button, ButtonGoogle } from '../components/button';
import Checkbox from '../components/checkbox/Checkbox';
import FormGroup from '../components/common/FormGroup';
import { IconEyeToggle } from '../components/icons';
import { Input } from '../components/input';
import Label from '../components/label';
import useToggleValue from '../hooks/useToggleValue';
import LayoutAuthentication from '../layouts/LayoutAuthentication';
import { authRegister } from '../store/auth/auth-slice';

const schema = yup.object({
  name: yup.string().required('This field is required!'),
  email: yup.string().email('').required('This field is required!'),
  password: yup
    .string()
    .required('This field is required')
    .min(8, 'Password must be 8 characters')
});

const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid, isSubmitting, errors }
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema)
  });
  const { value: acceptTerm, handleToggleValue: handleToggleTerm } =
    useToggleValue();
  const { value: showPassword, handleToggleValue: handleShowPassword } =
    useToggleValue();
  const dispatch = useDispatch();

  const handleSignUp = async (values) => {
    if (!isValid) return;
    try {
      dispatch(authRegister(values));
      reset({});
    } catch (error) {
      console.log(error);
    }
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
      <ButtonGoogle />
      <p className="mb-4 text-xs font-normal text-center lg:text-sm lg:mb-8 text-text2 dark:text-white">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label htmlFor="name">Full name *</Label>
          <Input
            control={control}
            name="name"
            placeholder="John Doe"
            error={errors.name?.message}
          />
        </FormGroup>
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
            placeholder="Create a password"
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleShowPassword}
            />
          </Input>
        </FormGroup>
        <div className="mb-5">
          <Checkbox
            name="term"
            checked={acceptTerm}
            onClick={handleToggleTerm}
          >
            <p className="flex-1 text-xs lg:text-sm text-text2 dark:text-text3">
              I agree to the{' '}
              <span className="underline cursor-pointer text-secondary">
                Terms of Use
              </span>{' '}
              and have read and understand the{' '}
              <span className="underline cursor-pointer text-secondary">
                Privacy policy
              </span>
            </p>
          </Checkbox>
        </div>
        <Button
          type="submit"
          className="w-full"
          kind="primary"
        >
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
