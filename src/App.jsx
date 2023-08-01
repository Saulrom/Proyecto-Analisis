import { AppRouter } from "./router/AppRouter";
import { AuthProvider } from "./context/AuthContext";
import Footer from "./Footer/Footer";
import Event from "./EventsDetail/Event";
import CreateEvents from './CreateEvents/CreateEvents';

export const App = () => {
  return (
    <>
   <CreateEvents/>
   {/*  <Event/>
      <AuthProvider>
        <AppRouter/>
      </AuthProvider> */} 
      <Footer/>
    </>
  )
}


