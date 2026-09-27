import Footer from '../components/Footer'
import Nav from '../components/Nav'
import AboutSection from './AboutSection'
import CTASection from './CTASection'
import FAQAndContact from './FAQAndContact'
import HeroBanner from './Herobanner'
import MetricsSection from './MetricsSection'
import ServicesSection from './ServicesSection'
import TestimonialsAndPartners from './TestimonialsAndPartners'
import GallerySection from './GallerySection'

function Index() {
    return (
        <>
        <section className='flex flex-col'>
            <Nav />
            <HeroBanner/>
            <AboutSection/>
            <ServicesSection/>
            <MetricsSection/>
            <TestimonialsAndPartners/>
            <GallerySection/>
            <FAQAndContact/>
            <CTASection/>
            <Footer/>
        </section>
        </>
    )
}

export default Index