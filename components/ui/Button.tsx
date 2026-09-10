"use client";

import Link from "next/link";
import { ROUTES } from "@/components/config/routes";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
  external?: boolean;
  disabled?: boolean;
  type?: "button" | "submit";
  "aria-label"?: string;
}

export function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  children,
  external = false,
  disabled = false,
  type = "button",
  "aria-label": ariaLabel,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A36A] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const variants = {
    primary:
      "bg-[#16A36A] text-white hover:bg-[#12916A] active:bg-[#0f7d5c] hover:scale-[1.02] shadow-sm hover:shadow-md",
    secondary:
      "bg-[#F4FBF7] text-[#16A36A] border border-[#16A36A]/20 hover:bg-[#EEF9F3] hover:border-[#16A36A]/40 hover:scale-[1.02]",
    ghost:
      "bg-transparent text-[#0a0a0a] hover:bg-[#F4FBF7] hover:text-[#16A36A]",
    outline:
      "bg-transparent text-[#0a0a0a] border border-[#E5E7EB] hover:border-[#16A36A] hover:text-[#16A36A] hover:scale-[1.01]",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm rounded-xl",
    md: "h-11 px-6 text-sm rounded-2xl",
    lg: "h-14 px-8 text-base rounded-2xl",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

// Convenience exports for common CTAs
export function ClubJoinButton({
  size = "lg",
  className,
  label = "DOKUN Club'a Katıl",
}: {
  size?: ButtonProps["size"];
  className?: string;
  label?: string;
}) {
  return (
    <Button href={ROUTES.clubJoin} variant="primary" size={size} className={className}>
      {label}
    </Button>
  );
}

export function DokunProButton({
  size = "lg",
  className,
}: {
  size?: ButtonProps["size"];
  className?: string;
}) {
  return (
    <Button href={ROUTES.dokunPro} variant="secondary" size={size} className={className}>
      DOKUN Pro&apos;yu Keşfet
    </Button>
  );
}
