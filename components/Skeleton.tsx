import { twMerge } from "tailwind-merge";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge("animate-pulse bg-neutral-200", className)}
      {...props}
    />
  );
}

export { Skeleton };
