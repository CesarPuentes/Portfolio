import React from "react"

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

const initialState = {
  language: "español",
  portfolioTitle: "Mi trabajo",
}

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_LANG": {
      return {
        ...state,
        language: state.language === "español" ? "english" : "español",
        portfolioTitle:
          state.portfolioTitle === "Mi trabajo" ? "My Work" : "Mi trabajo",
      }
    }
    default:
      throw new Error("Bad action")
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider
