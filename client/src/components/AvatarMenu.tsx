import React from "react"
import { AppContext } from "../ContextProvider"
import { Link } from "react-router-dom"

export const AvatarMenu = () => {
  const context = React.useContext(AppContext)

  return (
    <div className="h-14">
      <Link to="/login">
        <>
          {context.me ? (
            <div className="flex items-center justify-center">
              <img
                src={context.me.image}
                // className="w-14 h-14 rounded-full border-4 border-gray-300 shadow-lg"
                className="w-14 h-14 rounded-full border-4 border-gray-300 shadow-lg transition-transform duration-200 transform hover:scale-110 hover:border-[#034DA2]"
              />
            </div>
          ) : (
            <button id="login-mutation-button" className="btn-blue">
              Login
            </button>
          )}
        </>
      </Link>
    </div>
  )
}