import { AppRouter } from "./router/AppRouter";
import { AuthProvider } from "./context/AuthContext";

export const App = () => {
  return (
    <>
      <AuthProvider>
        <AppRouter/>
      </AuthProvider> 
    </>
  )
}


