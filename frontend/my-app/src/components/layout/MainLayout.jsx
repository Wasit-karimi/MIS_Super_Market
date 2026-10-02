import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"

const MainLayout = () => {
    return (
        <>
            <Sidebar />
            <main className="bg-green-300 absolute right-0 w-[70%] md:w-[60%چ lg:w-[85%] h-screen">
                <Outlet />
            </main>
        </>
    )
}

export default MainLayout