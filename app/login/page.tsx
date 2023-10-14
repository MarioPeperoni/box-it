"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import { useRouter, useSearchParams } from "next/navigation";

import LoginForm from "./(variants)/LoginForm";
import RegisterForm from "./(variants)/RegisterForm";

export interface LoginFormProps {
  changeVariant: () => void;
}

const Login = () => {
  const [variant, setVariant] = useState<"login" | "register">("login");
  const session = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  useEffect(() => {
    if (session.status === "authenticated") {
      router.push(searchParams.get("callbackUrl") || "/");
      router.refresh();
    }
  }, [session.status]);
  return (
    <div className="items-cen flex h-full w-full items-center justify-center bg-orange-100">
      <div className="w-[90%] items-center justify-center bg-white p-10 lg:h-auto lg:w-[600px]">
        {variant === "login" ? (
          <LoginForm changeVariant={() => setVariant("register")} />
        ) : (
          <RegisterForm changeVariant={() => setVariant("login")} />
        )}
      </div>
    </div>
  );
};

export default Login;
