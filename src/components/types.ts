import { MouseEventHandler, CSSProperties, ChangeEventHandler } from "react";

export type MessageFormProps = {
    messsageInput?: {
        placeholder: string
        inputStyle?: CSSProperties
        className?: string
        onChange?: ChangeEventHandler<HTMLInputElement>
    }

    submitButton?: {
        text?: string;
        disabled?: boolean;
        btnStyle?: CSSProperties
        className?: string
        onClick?: MouseEventHandler<HTMLButtonElement>;
    }
}