import React from "react";

export default function Info({ children, info }) {
  return (
    <div>
      <span className="text-grey">{children}</span>
      <span> {info}</span>
    </div>
  );
}
