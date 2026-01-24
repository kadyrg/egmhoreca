import { Link } from "@/shared/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { Separator } from "@/shared/ui/kit/separator";

const mainLinks = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Contact", link: "/contact" },
];

const legalLinks = [
  { label: "Terms of Service", link: "/terms-of-service" },
  { label: "Privacy Policy", link: "/privacy-policy" },
];

export async function AppFooter() {
  const t = await getTranslations("AppFooter");
  const year = new Date().getFullYear();

  return (
    <footer className="dark px-5 bg-background text-foreground">
      <div className="max-w-7xl mx-auto py-4">
        <div className="flex flex-wrap gap-12 justify-between py-6">
          <div className="flex flex-col gap-3">
            <div className="text-lg font-semibold">{t("links")}</div>
            <div className="flex flex-col gap-3">
              {mainLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="text-muted-foreground hover:text-foreground transition-all text-sm truncate"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-lg font-semibold">{t("legal")}</div>
            <div className="flex flex-col gap-2">
              {legalLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="text-muted-foreground hover:text-foreground transition-all text-sm truncate"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-lg font-semibold">Links</div>
            <div className="flex flex-col gap-2">
              <Link
                href={"/about-us"}
                className="text-muted-foreground hover:text-foreground transition-all text-sm truncate"
              >
                About us
              </Link>
              <Link
                href={"/about-us"}
                className="text-muted-foreground hover:text-foreground transition-all text-sm truncate"
              >
                Contact us
              </Link>
              <Link
                href={"/about-us"}
                className="text-muted-foreground hover:text-foreground transition-all text-sm truncate"
              >
                Terms of Service
              </Link>
              <Link
                href={"/about-us"}
                className="text-muted-foreground hover:text-foreground transition-all text-sm truncate"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-lg font-semibold">Links</div>
            <div className="flex flex-col gap-2">
              <Link
                href={"/about-us"}
                className="text-muted-foreground hover:text-foreground transition-all text-sm truncate"
              >
                About us
              </Link>
              <Link
                href={"/about-us"}
                className="text-muted-foreground hover:text-foreground transition-all text-sm truncate"
              >
                Contact us
              </Link>
              <Link
                href={"/about-us"}
                className="text-muted-foreground hover:text-foreground transition-all text-sm truncate"
              >
                Terms of Service
              </Link>
              <Link
                href={"/about-us"}
                className="text-muted-foreground hover:text-foreground transition-all text-sm truncate"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
        <Separator />
        <div className="py-3 flex flex-col gap-3">
          <div className="flex flex-wrap justify-between items-center gap-y-4 gap-x-12">
            <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              EGM Horeca
            </h4>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
              <Separator
                orientation="vertical"
                className="!h-4 bg-muted-foreground"
              />
              <span className="text-muted-foreground transition-all text-sm">
                {t("copyright", { year: year, title: "EGM Horeca" })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
