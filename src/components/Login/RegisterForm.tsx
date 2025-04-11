import { RegisterFormProps } from "types/props";

export const RegisterForm = ({ isRegisterVisible }: RegisterFormProps) => {


    return (
        <div
            className={`register-form ${isRegisterVisible ? "show" : ""}`}
        >

        </div >
    );
}