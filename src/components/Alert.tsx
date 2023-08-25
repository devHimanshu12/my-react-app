import { ReactNode } from "react"

interface props{
    // text:string
    // children:string
    children:ReactNode;
    onClose: ()=> void;
}
export const Alert = ({children,onClose}:props) => {
  return (
    <div className="alert alert-primary alert-dismissible">{children}
    <button type="button" className="btn-close" data-bs-dismiss="alert" onClick={onClose}></button>
    </div>
  )
}
