import {ThemeProvider} from "@/components/theme-provider"
import AppRoutes from "./components/Routes"
import "./App.css";
function App() {

    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <AppRoutes/>
            </ThemeProvider>
        </>
    )
}

export default App
