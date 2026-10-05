import { Link } from "react-router-dom"


const Accordion = ({
    title, 
    link,
    icon,
    children,
    isExpanded,
    onToggle,
}) => {


    return (

        <div className={`bg-background my-2 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden`} >

            <div className="flex items-center gap-2 px-2 py-3 cursor-pointer transition-all duration-200 scale-100" onClick={onToggle}>
                <i className={`${icon} md:text-lg text-sm`}></i>
                <h1 className="leading-light font-light md:text-md text-sm">
                    {link ? <Link to={link} >{title}</Link> : title}
                </h1>
            </div>



            <div className={`flex flex-col gap-2 px-2 text-sm overflow-hidden transition-all duration-300 ease-in ${isExpanded ? 'max-h-auto opacity-100 pb-2' : 'max-h-0 opacity-0 pb-0'}`}>
                {children?.map((child) => (
                    <Link key={child.id} to={child.link} className="text-dark flex items-center gap-2 py-1 pl-2 hover:text-info hover:pl-3 transition-all duration-200">
                        <i className={`${child.icon} leading-light font-light lg:text-md md:text-md text-xs`}></i>
                        <span className="leading-light font-light lg:text-md md:text-md text-xs">{child.title}</span>
                    </Link>
                ))}
            </div>



        </div>
    )
}

export default Accordion