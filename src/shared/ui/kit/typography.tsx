import { cn } from "@/shared/lib/css";

export function TypographyH3({
  className,
  ...props
}: React.ComponentProps<"h3">) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  );
}

export function TypographyP({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return <p className={cn("leading-7", className)} {...props} />;
}
