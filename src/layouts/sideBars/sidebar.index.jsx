import { useSelector } from "react-redux"
import { lazy } from "react"
const AdminSidebar = lazy(() => import('./adminSide'))

const SideBar = () => {
  const { role } = useSelector((state) => state.auth)

  return (
    role === 'admin' ?
      <AdminSidebar />
      : null
  )
}

export default SideBar