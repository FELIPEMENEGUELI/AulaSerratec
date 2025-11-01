import { FcAssistant, FcKey, FcCellPhone } from "react-icons/fc";
import { GrLocation } from "react-icons/gr";
import { HiCalendarDateRange } from "react-icons/hi2";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { NetoDaThais } from "./style";

export const FilhoDaThais = (props) => {
// export const FilhoDaThais = ({informacaoParaUsuario, tipoDeInput}) => {

  return (
    <div>
      <NetoDaThais
        // placeholder={props.informacaoParaUsuario ? props.informacaoParaUsuario : "Digite algo..."}
        placeholder={props.informacaoParaUsuario}
        type={props.tipoDeInput}
        respeitoAsMulheres={false}
      />

      {props.tipoDeInput === "password" && <FcKey />}

      {props.tipoDeInput === "email" && <FcAssistant />}

      {props.tipoDeInput === "date" && <HiCalendarDateRange />}
      
      {props.tipoDeInput === "cpf" && <MdOutlineDocumentScanner />}
      
      {props.tipoDeInput === "telefone" && <FcCellPhone />}
      
      {props.tipoDeInput === "endereco" && <GrLocation />}

    </div>
  )
}