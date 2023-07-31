import React from "react";
import { MessageFormProps } from "../types";

export const MessageForm = ({
  messsageInput,
  submitButton,
}: MessageFormProps) => {
  return (
    <div style={{ display: "flex", alignItems: "center", columnGap: 3 }}>
      <input
        type="text"
        name="message-input"
        id="message-input"
        className={messsageInput?.className}
        style={messsageInput?.inputStyle}
      />
      <button
        style={submitButton?.btnStyle}
        disabled={submitButton?.disabled}
        className={submitButton?.className}
      >
        {submitButton?.text || "Send"}
      </button>
    </div>
  );
};
