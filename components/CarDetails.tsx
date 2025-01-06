import { CarProps } from "@/types";
import React, { Fragment } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel
} from "@headlessui/react";
import Image from "next/image";
import { generateCarImageURL } from "@/utils";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return (
    <>
      <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/30 duration-300 ease-out data-[closed]:opacity-0"
        />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel
            transition
            className="relative max-w-lg max-h-[95vh] overflow-y-auto flex flex-col gap-5 rounded-2xl shadow-xl bg-white p-6 duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
          >
            <button
              type="button"
              className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
              onClick={closeModal}
            >
              <Image
                src="/close.svg"
                alt="close"
                width={20}
                height={20}
                className="object-contain"
              />
            </button>

            <div className="flex-1 flex-col gap-3">
              <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                <Image
                  src={generateCarImageURL(car)}
                  alt="car modal"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
              <div className="flex gap-3">
                <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                  <Image
                    src={generateCarImageURL(car, "29")}
                    alt="car modal"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                  <Image
                    src={generateCarImageURL(car, "33")}
                    alt="car modal"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                  <Image
                    src={generateCarImageURL(car, "13")}
                    alt="car modal"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <h2 className="font-semibold text-xl capitalize">
                {car.make} {car.model}
              </h2>
              <div className="mt-3 flex flex-wrap gap-4">
                {Object.entries(car).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between gap-5 w-full text-right"
                  >
                    <h4 className="text-grey capitalize">
                      {key.split("_").join(" ")}
                    </h4>
                    <p className="text-black-100 font-semibold capitalize">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default CarDetails;
