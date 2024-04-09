import Header from "@/components/Header"
import Hero from "@/components/Hero"
import {About} from "@/components/About";
import {HowItWorks} from "@/components/HowItWorks";
import {Features} from "@/components/Features";
import {Services} from "@/components/Services";
import {Testimonials} from "@/components/Testimonials";
import {Team} from "@/components/Team";
import {Pricing} from "@/components/Pricing";
import {Newsletter} from "@/components/Newsletter";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
const Welcome = () => {
    return (
        <>
            <Header/>
            <Hero/>
            <About/>
            <HowItWorks/>
            <Features/>
            <Services/>
            <Testimonials/>
            <Team/>
            <Pricing/>
            <Newsletter/>
            <Footer/>
            <ScrollToTop/>
        </>
    );
};

export default Welcome