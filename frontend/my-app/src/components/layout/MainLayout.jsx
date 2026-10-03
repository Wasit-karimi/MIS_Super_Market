import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"

const MainLayout = () => {
    return (
        <>
            <Sidebar />
            <main className=" fixed border right-0 top-0 w-[70%] sm:w-[60%] md:w-[65%] lg:w-[80%] xl:w-[82%] h-screen">
                <Outlet />
            </main>
        </>
    )
}

export default MainLayout