

const Button = ({title, className} : {
    title: string;
    className?: string;
}) => {
  return (
    <div className={`bg-primary cursor-pointer hover:bg-primaryHover text-center rounded-small py-2 px-6 border ${className}`}>
        <p className="text-white font-bold">{title}</p>
    </div>
  )
}

export default Button;