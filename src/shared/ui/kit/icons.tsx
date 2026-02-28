import { cn } from "@/shared/lib/css";

export function Logo({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      id="Layer_1"
      className={cn("size-5 fill-current", className)}
      viewBox="0 0 122.84 102"
      {...props}
    >
      <path d="M65.72,0H0v102h122.84V0h-57.12ZM101.27,83.06H21.57v-23.02h79.7v23.02ZM101.27,41.09H21.57v-22.15h79.7v22.15Z" />
    </svg>
  );
}
