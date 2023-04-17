interface Containerprops {
    children: React.ReactNode;
}
const Container:React.FC<Containerprops> = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default Container