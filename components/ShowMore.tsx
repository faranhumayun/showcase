"use client";

import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
    console.log("first", pageNumber)
  const router = useRouter();
  const handleNavigation = () => {
    const newLimit = ((pageNumber + 1) * 10).toString();
    const newPath = updateSearchParams("limit", newLimit);

    console.log(newPath);
    router.push(newPath);
  };
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {isNext && (
        <CustomButton
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
          btnType="button"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
