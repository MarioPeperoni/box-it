"use client";

import { useState } from "react";

import LoginForm from "@/app/login/(variants)/LoginForm";
import RegisterForm from "@/app/login/(variants)/RegisterForm";

export interface LoginFormProps {
  changeVariant: () => void;
}

export default function VariantWapper() {
  const [variant, setVariant] = useState<"login" | "register">("login");

  return (
    <>
      {variant === "login" ? (
        <LoginForm changeVariant={() => setVariant("register")} />
      ) : (
        <RegisterForm changeVariant={() => setVariant("login")} />
      )}
    </>
  );
}
