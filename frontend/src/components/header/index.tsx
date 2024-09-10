"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BadgeCheckIcon,
  ClockIcon,
  HouseIcon,
  PackageIcon,
  RefreshCcwIcon,
  ShoppingCartIcon,
  SmileIcon,
  TicketIcon,
  TruckIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Container from "@/components/ui/container";
import { SearchInput } from "@/components/header/search-input";
import { LocationCombobox } from "@/components/header/location-combobox";

import TakaLogo from "@/public/TAKA_Logo.png";

export const Header = () => {
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
    { icon: BadgeCheckIcon, text: "100% hàng thật" },
    { icon: RefreshCcwIcon, text: "Hoàn 200% nếu là hàng giả" },
    { icon: PackageIcon, text: "30 ngày đổi trả" },
    { icon: ClockIcon, text: "Giao nhanh 24h" },
    { icon: TicketIcon, text: "Giá siêu rẻ" },
    { icon: TruckIcon, text: "Freeship mọi nơi" },
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
            <Button variant="main" className="text-gray-500">
              <HouseIcon className="size-5 mr-2" />
              Home
            </Button>
            <Button variant="main" className="text-gray-500">
              <SmileIcon className="size-5 mr-2" />
              Account
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
          <span className="text-main">Cam kết</span>
          <div className="flex items-center space-x-6">
            {policies.map((policy, index) => (
              <React.Fragment key={index}>
                <div className="flex items-center space-x-4 text-sm">
                  <policy.icon className="size-5 text-main" />
                  <span>{policy.text}</span>
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
