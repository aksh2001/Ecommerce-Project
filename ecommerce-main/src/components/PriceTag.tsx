import { formatPrice } from "@/lib/format";
import React from "react";

interface IPriceTag {
  price: number;
  className?: string;
}

export default function PriceTag({ price, className }: IPriceTag) {
  return <span className={`badge ${className}`}>{formatPrice(price)}</span>;
}
