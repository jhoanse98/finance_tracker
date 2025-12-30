import React from "react";

const InfoText = ({ text }: { text: string }) => {
  return (
    <p
      style={{
        fontFamily: "Roboto",
        fontSize: 24,
        lineHeight: "12px",
        fontWeight: 600,
        margin: 0,
      }}
    >
      {text}
    </p>
  );
};

export default InfoText;
