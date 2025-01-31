import React, { useContext } from "react"
import { AppContext } from "./ContextProvider"
import AuthButtons from "./template/layout/AuthButtons"

type Props = {
  element: React.ReactNode
}

const PrivateRoute = (props: Props) => {
  const context = useContext(AppContext)
  if (context.isLoadingAuth) return <>Loading!</>
  if (!context.me)
    return (
      <div className="p-6">
        <h1>Error</h1>
        <p>This page is private.</p>
        <div className="mt-8">
          <AuthButtons />
        </div>
      </div>
    )
  return <>{props.element}</>
}

export default PrivateRoute
