"use client";

import { Link, usePathname } from "@/shared/i18n/navigation";
import { cn } from "@/shared/lib/css";

export function CartButton() {
  return (
    <HeaderLink href={"/cart"} className="relative">
      <ShoppingBag />
      <span className="text-[10px] font-medium absolute top-0.5 right-0 bg-primary text-background rounded-full border-2 border-background size-5 flex items-center justify-center">
        12
      </span>
    </HeaderLink>
  );
}

export function HeaderLink({
  href,
  className,
  ...props
}: React.ComponentProps<typeof Link>) {
  const pathname = usePathname();
  const isCurrentPath = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "h-full flex items-center px-3 text-foreground/80 hover:text-foreground transition-[color]",
        isCurrentPath && "text-foreground pointer-events-none",
        className,
      )}
      {...props}
    />
  );
}

export function ShoppingBag({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      className={cn("size-6 fill-current", className)}
      {...props}
    >
      <path d="M252.31-100Q222-100 201-121q-21-21-21-51.31v-455.38Q180-658 201-679q21-21 51.31-21H330v-10q0-62.15 43.92-106.08Q417.85-860 480-860t106.08 43.92Q630-772.15 630-710v10h77.69Q738-700 759-679q21 21 21 51.31v455.38Q780-142 759-121q-21 21-51.31 21H252.31Zm0-60h455.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-455.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H630v90q0 12.77-8.62 21.38Q612.77-520 600-520t-21.38-8.62Q570-537.23 570-550v-90H390v90q0 12.77-8.62 21.38Q372.77-520 360-520t-21.38-8.62Q330-537.23 330-550v-90h-77.69q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v455.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM390-700h180v-10q0-37.61-26.19-63.81Q517.62-800 480-800q-37.62 0-63.81 26.19Q390-747.61 390-710v10ZM240-160v-480 480Z" />
    </svg>
  );
}
