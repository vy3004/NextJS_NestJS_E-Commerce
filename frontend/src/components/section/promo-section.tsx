import React from "react";

import { Promo } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

interface PromoSectionProps {
  promos: Promo[];
}

export const PromoSection = ({ promos }: PromoSectionProps) => {
  return (
    <div className="bg-card p-4 rounded-xl grid grid-cols-10 gap-5">
      {promos.map((promo, index) => (
        <Link key={index} href={promo.link} className="text-center p-4">
          <Image
            src={promo.imgUrl}
            alt={promo.name}
            width={500}
            height={500}
            className="object-cover rounded-3xl shadow-md"
          />
          <span className="mt-2 text-sm">{promo.name}</span>
        </Link>
      ))}
    </div>
  );
};
