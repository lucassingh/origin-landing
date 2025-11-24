import { BackgroundProvider } from './UI/BackgroundProvider';
import { ServicesSection } from './ServicesSection';
import { PricingSection } from './PricingSection';
import { AdvancedWorkSection } from './AdvancedWorkSection';
import { HeaderAdvancedWorkSection } from './HeaderAdvancedWorkSection';
import { TestimonialSection } from './TestimonialSection';
import { FaqSection } from './FaqSection';
import { ContactSection } from './ContactSection';
import { HeroSection } from './HeroSection';
import { FooterSection } from './FooterSection';
import { AboutSection } from './AboutSection';
import { ProjectsSection } from './ProjectsSection';
import { useEffect, useState } from 'react';
import { LoaderComponent } from './UI/LoaderComponent';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './Navbar';

export function MainApp() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);
    }, []);

    const handleLoadingComplete = () => {
        setIsLoading(false);
        // Forzar un resize event para recalcular scroll triggers
        window.dispatchEvent(new Event('resize'));
    };

    return (
        <BackgroundProvider>
            <Navbar />
            {/* Loader */}
            <LoaderComponent onLoadingComplete={handleLoadingComplete} />

            {/* Contenido principal - NO usar display: none */}
            <AnimatePresence mode="wait">
                {!isLoading && (
                    <motion.div
                        key="main-content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 1.2,
                            ease: [0.83, 0, 0.17, 1]
                        }}
                    >
                        {/* hero section */}
                        <HeroSection />

                        {/* about */}
                        <AboutSection />

                        {/* services */}
                        <ServicesSection />

                        {/* Pricing */}
                        <PricingSection />

                        {/* worked */}
                        <HeaderAdvancedWorkSection />
                        <AdvancedWorkSection />

                        {/* Project Section */}
                        <ProjectsSection />

                        {/* testimonial section */}
                        <TestimonialSection />

                        {/* faq section */}
                        <FaqSection />

                        {/* contact section */}
                        <ContactSection />

                        {/* footer */}
                        <FooterSection />
                    </motion.div>
                )}
            </AnimatePresence>
        </BackgroundProvider>
    );
}