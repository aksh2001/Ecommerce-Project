"use client";

import React, { ComponentProps } from "react";
import { useFormStatus } from "react-dom";

type FormSubmitButtonProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;

export default function FormSubmitButton({
  children,
  className,
  ...props
}: FormSubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      {...props}
      disabled={pending}
      type="submit"
      className={`btn btn-primary ${className}`}
    >
      {pending && <span className="loading loading-ring" />}
      {children}
    </button>
  );
}
