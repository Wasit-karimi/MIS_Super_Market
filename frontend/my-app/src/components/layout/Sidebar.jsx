import logo from '../../assets/images/inventory-logo.png'

const Sidebar = () => {
    return (
        <>
            <aside className="fixed left-0 top-0 h-screen border w-[30%] sm:w-[40%] md:w-[35%] lg:w-[20%] xl:w-[18%]">

                {/* logo */}

                {/* <div className="w-full my-2 rounded-md shadow-md hover:shadow-lg transition-all duration-200">
                    <a href="/" className='flex-center py-1'>
                        <img src={logo} alt="logo" className='w-[60%] lg:w-[70%] ' />
                    </a>
                </div> */}

                <div className="my-2 flex w-full justify-center rounded-md px-3 py-2 shadow-md transition-all duration-200 hover:shadow-lg">
                    <a href="/" className="flex items-center justify-center">
                        <img
                            src={logo}
                            alt="Inventory Logo"
                            className="w-32 object-contain"
                        />
                    </a>
                </div>

                {/* links */}

                <div></div>
            </aside>
        </>
    )
}

export default Sidebar