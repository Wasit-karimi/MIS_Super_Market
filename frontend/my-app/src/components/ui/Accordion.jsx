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

            <div className="flex justify-between items-center px-2 py-3 cursor-pointer transition-all duration-200" onClick={onToggle}>
                <h1 className="text-lg font-semibold">
                    {link ? <Link to={link}>{title}</Link> : title}
                </h1>
                <i className={icon}></i>
            </div>



            <div className={`flex flex-col gap-2 px-2 text-sm overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-auto opacity-100 pb-2' : 'max-h-0 opacity-0 pb-0'}`}>
                {children?.map((child) => (
                    <Link key={child.id} to={child.link} className="text-dark flex items-center gap-2 py-1 hover:text-info hover:pl-3 transition-all duration-200">
                        <i className={child.icon}></i>
                        <span>{child.title}</span>
                    </Link>
                ))}
            </div>



        </div>
    )
}

export default Accordion