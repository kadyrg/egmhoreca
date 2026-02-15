"use client";

import { cn } from "@/shared/lib/css";
import { useEffect, useState } from "react";

interface Props {
  data: { id: number; title: string; slug: string }[];
}

export function SubCategoriesSidebar({ data }: Props) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-10% 0px -50% 0px", // Adjust these values as needed for better trigger points
        threshold: 0,
      },
    );

    data.forEach((item) => {
      const element = document.getElementById(String(item.id));
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      data.forEach((item) => {
        const element = document.getElementById(String(item.id));
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [data]);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-11 h-[calc(100vh-44px)] flex flex-col gap-5 justify-center">
      {data.map((item) => (
        <button
          key={item.id}
          onClick={() => handleScroll(String(item.id))}
          className={cn(
            "font-semibold text-left transition-all truncate text-sm",
            activeId === String(item.id)
              ? "text-foreground"
              : "text-foreground/70 hover:text-foreground",
          )}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
}
