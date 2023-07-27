import { MouseEventHandler, CSSProperties, ChangeEventHandler } from "react";

export type MessageFormProps = {
    messsageInput: {
        placeholder: string
        inputStyle?: CSSProperties
        onChange?: ChangeEventHandler<HTMLInputElement>
    }

    submitButton: {
        text?: string;
        disabled?: boolean;
        btnStyle?: CSSProperties
        onClick?: MouseEventHandler<HTMLButtonElement>;
    }
}