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
import { useEffect } from 'react';

export function MainApp() {

    useEffect(() => {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);
    }, []);

    return (
        <BackgroundProvider>
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
        </BackgroundProvider>
    );
}