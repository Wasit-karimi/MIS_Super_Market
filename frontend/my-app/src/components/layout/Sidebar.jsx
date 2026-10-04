import { useState } from 'react'
import logo from '../../assets/images/inventory-logo.png'
import icon from '../../assets/images/inventory-icon.png'
import accordionData from '../../data/sidebarData'
import Accordion from '../ui/Accordion'

const Sidebar = () => {
    const [expandedId, setExpandedId] = useState(null)

    const toggleExpand = (id) => {
        setExpandedId((prevId) => (prevId === id ? null : id));
    };

    return (
        <>
            <aside className="absolute left-0 top-0 flex flex-col justify-between h-screen w-[30%] sm:w-[40%] md:w-[35%] lg:w-[20%] xl:w-[18%]">

                <div>
                    {/* logo */}

                    <div className="my-2 mx-auto w-[95%] sm:w-[90%] flex justify-center rounded-md px-3 py-2 shadow-md transition-all duration-200 hover:shadow-lg">
                        <a href="/" className="flex items-center justify-center">
                            <img
                                src={logo}
                                alt="Inventory Logo"
                                className="w-32 object-contain"
                            />
                        </a>
                    </div>

                    {/* links */}

                    <div className=' mx-auto px-1 py-2 shadow-md hover:shadow-lg w-[95%] sm:w-[90%] transition-all duration-200 rounded-md'>
                        {
                            accordionData.map((item) => (
                                <Accordion
                                    key={item.id}
                                    {...item}
                                    isExpanded={expandedId === item.id}
                                    onToggle={() => toggleExpand(item.id)}
                                />
                            ))
                        }
                    </div>
                </div>

                <div className='mx-auto mb-2 px-3 py-2 flex gap-2 justify-between items-center  shadow-xl hover:shadow-lg w-[95%] sm:w-[90%] transition-all duration-200 rounded-md '>
                    <div className='flex gap-2 cursor-pointer'>
                        <img src={icon} alt="User" className=' flex-center ring-2 ring-primary rounded-full' width={24} />
                        <h6>NexusMart</h6>
                    </div>
                    <i className="fa-solid fa-right-from-bracket cursor-pointer"></i>
                </div>
            </aside>
        </>
    )
}

export default Sidebar