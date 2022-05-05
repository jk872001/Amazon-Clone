import React from 'react'
import {Header,CreateContainer,MainContainer} from './components'
import {Routes,Route} from "react-router-dom";
export const App = () => {
  return (
    <div className="w-screen h-auto flex flex-col bg-primary">
  <Header />
  <main className="mt-24 p-8 w-full">
  <Routes>
     <Route path="/*" element={<MainContainer />} />
     <Route path="/createItem" element={<CreateContainer />} />
</Routes>
  </main>
</div>
  )
}
