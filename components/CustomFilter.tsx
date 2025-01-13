"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { CustomFilterProps } from "@/types";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { updateSearchParams } from "@/utils";

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const router = useRouter();
  const [selected, setSelected] = useState(options[0]);

  const handleUpdateParams = (e: { title: string; value: string }) => {
    const newPathName = updateSearchParams(title, e.value.toLowerCase());
    router.push(newPathName);
  };

  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          handleUpdateParams(e);
        }}
      >
        <div className="relative w-fit z-10">
          <ListboxButton className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
          </ListboxButton>
          <ListboxOptions className="custom-filter__options" anchor="bottom">
            {options.map((item) => (
              <ListboxOption
                key={`${item.title}-option`}
                value={item}
                className="relative cursor-default select-none py-2 px-4 data-[focus]:bg-blue-100 data-[selected]:block data-[selected]:truncate data-[selected]:font-medium"
              >
                <span>{item.title}</span>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
