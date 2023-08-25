interface props{
    children:string;
    color: "primary" | "secondary" | "danger";
    onClick: () => void
}
export const Button = ({children,color,onClick}:props) => {
  return (
    <button className={"btn btn-"+ color} onClick={onClick}>{children}</button>
  )
}
