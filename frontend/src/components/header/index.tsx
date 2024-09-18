"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  BadgeCheckIcon,
  CircleUserRoundIcon,
  ClockIcon,
  PackageIcon,
  RefreshCcwIcon,
  ShoppingCartIcon,
  TicketIcon,
  TruckIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/header/mode-toggle";
import { SearchInput } from "@/components/header/search-input";
import { LocationCombobox } from "@/components/header/location-combobox";

import TakaLogo from "/public/TAKA_Logo.png";
import { LocaleToggle } from "./locale-toggle";

export const Header = () => {
  const t = useTranslations("Header");

  const [scrollY, setScrollY] = useState(0);
  const [visible, setVisible] = useState("translate-y-0");

  const handleScroll = useCallback(() => {
    if (window.scrollY > 50) {
      setVisible(
        window.scrollY > scrollY ? "-translate-y-[108px]" : "translate-y-0"
      );
    } else {
      setVisible("translate-y-0");
    }
    setScrollY(window.scrollY);
  }, [scrollY]);

  useEffect(() => {
    const onScroll = () => {
      window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [handleScroll]);

  const policies = [
    { icon: BadgeCheckIcon, text: "100% Authentic Products" },
    { icon: RefreshCcwIcon, text: "200% Refund If Fake" },
    { icon: PackageIcon, text: "30-Day Returns" },
    { icon: ClockIcon, text: "24-Hour Fast Delivery" },
    { icon: TicketIcon, text: "Super Low Prices" },
    { icon: TruckIcon, text: "Free Shipping Anywhere" },
  ];

  return (
    <div
      className={`bg-card py-3 border-b space-y-4 transition-transform duration-1000 ease-in-out ${visible}`}
    >
      <Container>
        <div className="flex items-center space-x-10">
          <Image
            src={TakaLogo}
            alt="TakaLogo"
            className="object-cover max-w-36"
          />
          <LocationCombobox />
          <SearchInput />
          <div className="flex items-center space-x-2">
            <LocaleToggle />
            <ModeToggle />
            <Button variant="main" size="icon">
              <CircleUserRoundIcon className="size-5" />
            </Button>
            <Separator orientation="vertical" className="h-5" />
            <Button variant="main" size="icon">
              <ShoppingCartIcon className="size-5" />
            </Button>
          </div>
        </div>
      </Container>

      <Container>
        <Link href="#" className="flex items-center space-x-6">
          <span className="text-main">{t("Policies")}</span>
          <div className="flex items-center space-x-6">
            {policies.map((policy, index) => (
              <React.Fragment key={index}>
                <div className="flex items-center space-x-4 text-sm">
                  <policy.icon className="size-5 text-main" />
                  <span>{t(policy.text)}</span>
                </div>
                {index < policies.length - 1 && (
                  <Separator orientation="vertical" className="h-5" />
                )}
              </React.Fragment>
            ))}
          </div>
        </Link>
      </Container>
    </div>
  );
};
