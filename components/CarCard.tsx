"use client";
import { useState } from "react";
import { CarProps } from "@/types";
import Image from "next/image";
import { calculateCarRent } from "@/utils";
import heroImg from "@/public/hero.png"

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, drive, make, model, transmission, year } = car;
  const carRent = calculateCarRent(city_mpg, year);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="text-[14px] font-semibold">$</span>
        {carRent}
        <span className="text-[14px] font-medium self-end">/day</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image src={heroImg} alt="car image" width={800} height={400} className="object-contain w-full h-auto" />
      </div>

      <div className="relative flex w-full mt-2">
        
      </div>
    </div>
  );
};

export default CarCard;
