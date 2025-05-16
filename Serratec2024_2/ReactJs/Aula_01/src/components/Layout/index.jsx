import { Outlet, Link } from "react-router-dom"
import { Headers } from '../Headers'

export const Layout = () => {

  return (
    <>
      <Headers />
      <Outlet />
      <Link />
    </>
  )
}