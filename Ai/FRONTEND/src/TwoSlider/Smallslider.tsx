/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import { FC, useEffect, useState } from "react";
import pix from "../assets/Smallslider/assets/Screenshot 2024-10-29 161233.png";
import pix1 from "../assets/Smallslider/assets/Screenshot 2024-10-29 161247.png";
import pix2 from "../assets/Smallslider/assets/Screenshot 2024-10-29 161300.png";
import pix3 from "../assets/Smallslider/assets/Screenshot 2024-10-29 161310.png";
import pix4 from "../assets/Smallslider/assets/Screenshot 2024-10-29 161319.png";
import { animate, motion, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";
import data2 from "../Data2.json";

const images = [pix, pix1, pix2, pix3, pix4];

const SmallSlider = () => {
  const [ref, { width }] = useMeasure();
  let xMovement = useMotionValue(0);

  const SLOW: number = 80;
  const FAST: number = 30;

  const [duration, setDuration] = useState<number>(FAST);

  const [finished, setFinished] = useState<boolean>(false);
  const [render, setRender] = useState<boolean>(false);

  useEffect(() => {
    let control;
    let finalPosition = -width / 2 - 8;

    if (finished) {
      control = animate(xMovement, [xMovement.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xMovement.get() / finalPosition),
        onComplete: () => {
          setRender(!render);
          setFinished(false);
        },
      });
    } else {
      control = animate(xMovement, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatDelay: 0,
        repeatType: "loop",
        onRepeat: () => {
          xMovement.set(finalPosition);
        },
      });
    }

    return () => control?.stop();
  }, [xMovement, width, duration, render]);

  return (
    <div className="overflow-hidden mt-10">
      <motion.div
        onHoverStart={() => {
          setDuration(SLOW);
          setFinished(true);
        }}
        onHoverEnd={() => {
          setDuration(FAST);
          setFinished(true);
        }}
        ref={ref}
        style={{ x: xMovement }}
        className="flex w-max gap-4"
      >
        {Array.from({ length: 3 }, () => {
          return images;
        }).map((el: any) => {
          return el.map((el: any, i: number) => (
            <Card key={i} el={el} content={data2[i]} />
          ));
        })}
      </motion.div>
    </div>
  );
};

export default SmallSlider;

interface iProps {
  el: string;
  content: {
    id: number;
    title: string;
  };
}

const Card: FC<iProps> = ({ el, content }) => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-4">
      <motion.div
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        className="border overflow-hidden rounded-md w-[200px] h-[160px] cursor-pointer relative"
      >
        <img src={el} alt="images" className="w-full h-full object-cover " />
      </motion.div>
      <div className="w-[100%] h-[20%]">
        <div className="font-semibold">{content.title}</div>
      </div>
    </div>
  );
};
