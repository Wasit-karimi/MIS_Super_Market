const Button = ({type, title, icon, className}) => {
    return (
        <button
            type={type}
            className={className}
        >
            <i className={`${icon} text-xs`} />
            {title}
        </button>
    )
}

export default Button
