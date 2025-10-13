import React from "react";

const ScrollLink = ({ targetId, children }) => {
  const handleScroll = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return <button onClick={handleScroll}>{children}</button>;
};

export default ScrollLink;
