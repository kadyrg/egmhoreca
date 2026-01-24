import type { LinkType } from "@/features/app-header";
import { getTranslations } from "@/features/translations";

export async function getLegalLinks({
  locale,
}: {
  locale: string;
}): Promise<LinkType[]> {
  const { t } = await getTranslations({ locale: locale });

  return [
    {
      label: t("links-legal-terms-of-service"),
      link: "/legal/terms-of-service",
    },
    {
      label: t("links-legal-privacy-policy"),
      link: "/legal/privacy-policy",
    },
  ];
}
