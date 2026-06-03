import { InputStyle } from "./style"
import { CiSearch } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";

export const InputField = ({ valueInput, typeInput, idInput, placeholderInput, onChangeInput, icon }) => {

    return (
        <>
            <InputStyle
                type={typeInput}
                value={valueInput}
                onChange={onChangeInput}
                placeholder={placeholderInput}
                id={idInput}
            />

            {icon === 'search' && (
                <CiSearch color={'red'} size={20} />
            )}

            {icon === 'google' && (
                <FcGoogle size={20} />
            )}
        </>
    )
}
