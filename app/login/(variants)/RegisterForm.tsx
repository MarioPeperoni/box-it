import { useState } from "react";
import { Form, Formik } from "formik";
import * as yup from "yup";

import axios from "axios";
import { signIn } from "next-auth/react";

import toast from "react-hot-toast";

import Button from "@/components/Button";
import Input from "@/components/form/Input";
import BigErrorBox from "@/components/form/BigErrorBox";

import { LoginFormProps } from "@/app/login/page";

const RegisterForm: React.FC<LoginFormProps> = ({ changeVariant }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("This is not a valid e-mail")
      .required("E-mail is required"),
    username: yup
      .string()
      .min(4, "Username must be at least 4 characters long ")
      .max(32, "Username must be at most 32 characters long")
      .required("Username is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters long")
      .required("Password is required"),
    passwordrepeat: yup
      .string()
      .required("Password repeat is required")
      .oneOf([yup.ref("password")], "Passwords doesn't match"),
  });

  const handleSubmit = (values: any) => {
    setIsLoading(true);
    axios
      .post("/api/auth/register", values)
      .then(() => {
        signIn("credentials", { ...values, redirect: false }).then(
          (callback) => {
            if (callback?.error) {
              setError(callback.error);
            }
            if (callback?.ok && !callback?.error) {
              toast.success("Logged in successfully");
            }
          },
        );
      })
      .catch((e) => {
        if (e) {
          setError("User with this email already exists");
        }
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        username: "",
        passwordrepeat: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ errors, touched }) => (
        <Form className="flex flex-col gap-5">
          <div className="">
            <h1 className="text-4xl font-bold">Create account</h1>
            <h2 className="text-xl font-semibold text-neutral-500">
              Fill out the details to get started
            </h2>
          </div>
          <Input
            name="email"
            type="email"
            placeholder="Your e-mail"
            label="E-mail"
            size="full"
            disabled={isLoading}
            errors={errors.email}
            touched={touched.email}
          />
          <Input
            name="username"
            type="text"
            placeholder="Username"
            label="Username"
            size="full"
            disabled={isLoading}
            errors={errors.username}
            touched={touched.username}
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            label="Password"
            size="full"
            disabled={isLoading}
            errors={errors.password}
            touched={touched.password}
          />
          <Input
            name="passwordrepeat"
            type="password"
            placeholder="Repeat password"
            label="Repeat password"
            size="full"
            disabled={isLoading}
            errors={errors.passwordrepeat}
            touched={touched.passwordrepeat}
          />
          <BigErrorBox error={error} />
          <Button type="submit" primary disabled={isLoading}>
            Sign up
          </Button>

          <p className="flex justify-center gap-1 text-sm font-light">
            Already have an account?{" "}
            <button
              className="text-boxit-primary transition hover:underline"
              onClick={changeVariant}
              disabled={isLoading}
            >
              Sign in
            </button>
          </p>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
