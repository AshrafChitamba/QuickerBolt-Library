import React from "react";
import { MessageFormProps } from "../types";

const MessageForm = ({ messsageInput, submitButton }: MessageFormProps) => {
  return (
    <div>
      <input
        type="text"
        name="message-input"
        id="message-input"
        style={messsageInput?.inputStyle}
      />
      <button style={submitButton?.btnStyle}>
        {submitButton?.text || "Send"}
      </button>
    </div>
  );
};

export default MessageForm;
