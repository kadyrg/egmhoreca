import { Link } from "@/shared/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { Separator } from "@/shared/ui/kit/separator";

export async function AppFooter() {
  const t = await getTranslations("AppFooter");
  const year = new Date().getFullYear();

  const data = [
    {
      label: t("links.label"),
      links: [
        { label: t("links.home"), link: "/" },
        { label: t("links.about"), link: "/about" },
        { label: t("links.contact"), link: "/contact" },
      ]
    },
    {
      label: t("legal.label"),
      links: [
        { label: t("legal.terms-of-service"), link: "/terms-of-service" },
        { label: t("legal.privacy-policy"), link: "/privacy-policy" },
      ]
    },
  ];

  return (
    <footer className="dark px-5 bg-background text-foreground">
      <div className="max-w-7xl mx-auto pt-4">
        <div className="flex flex-wrap gap-12 justify-between py-6">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col gap-3">
              <div className="text-lg font-semibold">{item.label}</div>
              <div className="flex flex-col gap-2">
                {item.links.map((item, index) => (
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
          ))}
        </div>
        <Separator />
        <div className="py-3 flex flex-col gap-3">
          <div className="flex flex-wrap justify-between items-center gap-y-4 gap-x-12">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              {t("title")}
            </h4>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
              <Separator
                orientation="vertical"
                className="!h-4 bg-muted-foreground"
              />
              <span className="text-muted-foreground transition-all text-sm">
                {t("copyright", { year: year, title: t("title") })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
