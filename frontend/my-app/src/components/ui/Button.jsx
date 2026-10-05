const Button = ({type, title, icon}) => {
    return (
        <button
            type={type}
            className="inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1"
        >
            <i className={`${icon} text-xs`} />
            {title}
        </button>
    )
}

export default Button