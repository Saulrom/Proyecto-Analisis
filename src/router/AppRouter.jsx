import { Routes, Route } from "react-router-dom";
import {LoginPage} from "../components/LoginPage";
import {Events} from "../components/Events";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/events" element={ <Events/> }/>
      </Routes>
    </>
  )
}
