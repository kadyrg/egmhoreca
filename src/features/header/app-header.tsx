"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@/shared/i18n/navigation";
import { cn } from "@/shared/lib/css";
import { ApiSchemas } from "@/shared/api/schema";
import { CartButton } from "./cart-button";
import { useIsTablet } from "@/shared/lib/react/use-tablet";

export function AppHeader({ categories }: { categories: ApiSchemas["CategorySchema"][] }) {
  const [open, setOpen] = React.useState(false);
  const tablet = useIsTablet();

  React.useEffect(() => {
    if (tablet) return;
    setOpen(false);
  }, [tablet]);

  return (
    <div className="h-11">
      <header
        className={cn(
          "px-3 fixed w-full bg-[#F1F5F9]/80 backdrop-blur-[60px] z-50 flex flex-col items-center transition-[height,background] duration-1200 ease-in-out h-11 overflow-hidden",
          open && "h-[100vh] bg-[#F1F5F9]",
        )}
      >
        <div className="w-full max-w-6xl h-full">
          <div className="flex justify-between h-11 gap-15">
            <Link
              href="/"
              className={cn(
                "px-2 flex items-center transition-[opacity] duration-800 ease-in-out",
                open && "opacity-0",
              )}
            >
              <Image src={"/logo.svg"} width={30} height={30} alt={""} />
            </Link>
            {!tablet && (
              <div className="flex gap-3 lg:gap-4 xl:gap-5">
                {categories.map((item, index) => (
                  <Link
                    key={index}
                    href={`/${item.slug}`}
                    className="flex px-2 truncate items-center text-sm text-foreground/75 hover:text-foreground transition-all"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
            <div className="h-full flex">
              <div
                className={cn(
                  "transition-[opacity] duration-800 ease-in-out",
                  open && "opacity-0",
                )}
              >
                <CartButton />
              </div>
              {tablet && (
                <button
                  onClick={() => setOpen((prev) => !prev)}
                  className="flex flex-col justify-center items-center px-3 h-full gap-[6px] relative"
                >
                  <span
                    className={cn(
                      "block h-[1.5px] w-4 bg-foreground transition-all duration-300 ease-in-out",
                      open && "rotate-45 translate-y-[3.75px]",
                    )}
                  />
                  <span
                    className={cn(
                      "block h-[1.5px] w-4 bg-foreground transition-all duration-300 ease-in-out",
                      open && "-rotate-45 -translate-y-[3.75px]",
                    )}
                  />
                </button>
              )}
            </div>
          </div>
          {tablet && (
            <div className="flex flex-col gap-4 py-5 px-2">
              {categories.map((item, index) => (
                <Link
                  key={index}
                  href={`/${item.slug}`}
                  style={{
                    transitionDelay: open
                      ? `${(index + 4) * 80}ms`
                      : `${(categories.length - index - 1) * 60}ms`,
                  }}
                  className={cn(
                    "text-[26px] font-semibold transform transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    open ? "opacity-100" : "opacity-0",
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      </header>
    </div>
  );
}
