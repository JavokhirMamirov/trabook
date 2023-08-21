import { useSpring, animated } from "react-spring";
import { useState } from "react";
import Avatar from "../assets/avatar.png";

function CommentCard() {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });
  return (
    <animated.div
      className="bg-white flex flex-col p-[34px] relative rounded-[10px] w-[500px]  shadow-comment"
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
        <img src={Avatar} className="w-[68px] h-[68px] rounded-full absolute -top-9 -left-8"/>
        <span className="font-Poppins text-[#444] text-base font-medium leading-8 ">“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</span>
        <span className="font-Poppins text-PrimaryB text-lg font-semibold mt-[34px]">Mike taylor</span>
        <span className="font-Poppins text-Paragraph text-sm font-medium mt-[5px]">Lahore, Pakistan</span>
    </animated.div>
  );
}

export default CommentCard;
