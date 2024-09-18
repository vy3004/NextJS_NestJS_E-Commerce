"use client";

import { GlobeIcon } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { routing, Locale } from "@/i18n/routing";
import { changeLocale } from "@/lib/utils";
import { useTranslations } from "next-intl";

export function LocaleToggle() {
  const router = useRouter();
  const params = useParams();

  const t = useTranslations("LocaleToggle");

  const handleLocaleChange = (nextLocale: Locale) => {
    const newUrl = changeLocale(nextLocale);
    router.replace(newUrl);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <GlobeIcon className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit border">
        {routing.locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => handleLocaleChange(locale)}
            disabled={params.locale === locale}
          >
            {t(locale)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
