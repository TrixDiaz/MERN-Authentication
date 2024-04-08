import {ThemeProvider} from "@/components/theme-provider"
import AppRoutes from "./components/Routes"
import Header from './components/Header'
import { Footer } from "@/components/Footer";
import {ScrollToTop} from "@/components/ScrollToTop";
import "./App.css";
function App() {

    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <Header/>
                <AppRoutes/>
                <Footer/>
                <ScrollToTop/>
            </ThemeProvider>
        </>
    )
}

export default App
