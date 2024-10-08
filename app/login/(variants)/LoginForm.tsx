import { useRouter } from "next/navigation";
import { useState } from "react";
import { Form, Formik } from "formik";

import { signIn } from "next-auth/react";

import toast from "react-hot-toast";

import Button from "@/components/Button";
import Input from "@/components/form/Input";
import BigErrorBox from "@/components/form/BigErrorBox";

import { LoginFormProps } from "@/app/login/(variants)/VariantWapper";

const LoginForm: React.FC<LoginFormProps> = ({ changeVariant }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = (values: any) => {
    setIsLoading(true);
    signIn("credentials", { ...values, redirect: false })
      .then((callback) => {
        if (callback?.error) {
          setError(callback.error);
        }
        if (callback?.ok && !callback?.error) {
          toast.success("Logged in successfully");
        }
      })
      .finally(() => {
        setIsLoading(false);
        router.refresh();
      });
  };
  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      <Form className="flex flex-col gap-5">
        <div className="">
          <h1 className="text-4xl font-bold">Login to your account</h1>
          <h2 className="text-xl font-semibold text-neutral-500">
            Please sign up to continue
          </h2>
        </div>
        <Input
          name="email"
          type="email"
          placeholder="Your e-mail"
          label="E-mail"
          size="full"
          disabled={isLoading}
          errors={error!}
          touched={error ? true : false}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          label="Password"
          size="full"
          disabled={isLoading}
          errors={error!}
          touched={error ? true : false}
        />

        <BigErrorBox error={error} />
        <Button type="submit" primary disabled={isLoading}>
          Log in
        </Button>

        <p className="flex justify-center gap-1 text-sm font-light">
          Don&apos;t have a Box It account?
          <button
            className="text-boxit-primary transition hover:underline"
            onClick={changeVariant}
            disabled={isLoading}
            type="button"
          >
            Register now
          </button>
        </p>
      </Form>
    </Formik>
  );
};

export default LoginForm;
