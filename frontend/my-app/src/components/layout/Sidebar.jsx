import logo from '../../assets/images/inventory-logo.png'

const Sidebar = () => {
    return (
        <>
            <aside className="absolute left-0 top-0 w-[30%] sm:w-[40%] md:w-[35%] lg:w-[20%] xl:w-[18%]">

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

                <div className='h-screen mx-auto shadow-md hover:shadow-lg w-[95%] sm:w-[90%] transition-all duration-200 rounded-md'></div>
            </aside>
        </>
    )
}

export default Sidebar