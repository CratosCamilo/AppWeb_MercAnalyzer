import { useEffect } from "react";
import { HOME_TITLE } from "../constants/constans";

export const HomeLayout = () => {
    useEffect(() => { document.title = HOME_TITLE }, []);

    return (
        <>
        </>
    );
}