import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

interface ToggleProps {
  children: React.ReactNode;
  title: string;
  className?: string;
  onClick?: () => void;
  isTitleOnlyToggle?: boolean;
}

const Toggle = ({
  children,
  title,
  isTitleOnlyToggle = false,
}: ToggleProps) => {
  const [toggle, setToggle] = useState(true);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isTitleOnlyToggle && event.target === event.currentTarget.firstChild) {
      setToggle(!toggle);
    } else if (!isTitleOnlyToggle) {
      setToggle(!toggle);
    }
  };

  return (
    <div onClick={handleClick}>
      <span>{title}</span>
      {toggle ? children : ""}
      <FontAwesomeIcon icon={toggle ? faAngleUp : faAngleDown} />
    </div>
  );
};

export default Toggle;
