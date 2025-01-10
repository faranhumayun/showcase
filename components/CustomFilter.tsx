"use client";
import React, { useState } from "react";

import { CustomFilterProps } from "@/types";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0]);
  console.log("first", options[0]);
  return (
    <div className="w-fit">
      <Listbox value={selected} onChange={(e) => setSelected(e)}>
        <div className="relative w-fit z-10">
          <ListboxButton className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
          </ListboxButton>
          <ListboxOptions className="custom-filter__options" anchor="bottom">
            {options.map((item) => (
              <ListboxOption
                key={`${item.title}-option`}
                value={item}
                className="relative cursor-default select-none py-2 px-4 data-[focus]:bg-blue-100"
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
