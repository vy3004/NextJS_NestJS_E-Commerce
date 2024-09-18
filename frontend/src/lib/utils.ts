import { Locale } from "@/i18n/routing";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const changeLocale = (newLocale: Locale) => {
  const urlObject = new URL(window.location.href, window.location.origin);
  const pathnameParts = urlObject.pathname.split("/").filter(Boolean);
  if (pathnameParts.length > 0) {
    pathnameParts[0] = newLocale;
  }
  urlObject.pathname = "/" + pathnameParts.join("/");
  return urlObject.href;
};
