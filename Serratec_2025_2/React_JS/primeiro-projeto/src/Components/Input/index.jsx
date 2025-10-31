import { FcAssistant, FcKey, FcCellPhone } from "react-icons/fc";
import { GrLocation } from "react-icons/gr";
import { HiCalendarDateRange } from "react-icons/hi2";
import { MdOutlineDocumentScanner } from "react-icons/md";

export const InputGeneric = ({informacaoParaUsuario, tipoDeInput}) => {

  return (
    <div>
      <input
        placeholder={informacaoParaUsuario ? informacaoParaUsuario : "Digite algo..."}
        type={tipoDeInput}
      />

      {tipoDeInput === "password" && <FcKey />}

      {tipoDeInput === "email" && <FcAssistant />}

      {tipoDeInput === "date" && <HiCalendarDateRange />}
      
      {tipoDeInput === "cpf" && <MdOutlineDocumentScanner />}
      
      {tipoDeInput === "telefone" && <FcCellPhone />}
      
      {tipoDeInput === "endereco" && <GrLocation />}

    </div>
  )
}