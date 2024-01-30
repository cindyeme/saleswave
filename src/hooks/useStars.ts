import { AppIcons } from "@/elements";
import { useEffect, useState } from "react";

const useStars = (stars: number) => {
  const [starIcons, setStarIcons] = useState<React.JSX.Element[]>([]);
  useEffect(() => {
    starArray(stars);
  }, [stars]);

  const starArray = (stars: number) => {
    const array = [];
    for (let i = 0; i < stars; i++) {
      array.push(AppIcons.ic_star_fill);
    }
    for (let i = stars; i < 5; i++) {
      array.push(AppIcons.ic_star_empty);
    }
    setStarIcons(array);
  };

  return { starIcons };
};

export default useStars;
