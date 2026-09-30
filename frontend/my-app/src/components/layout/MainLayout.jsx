import { Outlet } from "react-router-dom"
import Header from "./Header"
import Sidebar from "./Sidebar"

const MainLayout = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <main className="bg-green-300 absolute right-0 w-[70%] md:w-[60%} lg:w-[85%] h-screen">
                <Outlet />
            </main>
        </>
    )
}

export default MainLayout