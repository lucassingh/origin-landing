import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { HeadingSection } from './UI/HeadingSection';

interface TestimonialCardProps {
    testimonial: any;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
    return (
        <motion.div
            className="shrink-0 w-80 h-auto border border-white/10 rounded-2xl p-6 backdrop-blur-sm transition-all duration-500 group relative"
            whileHover={{
                y: -8,
                scale: 1.02,
                borderColor: "rgba(255, 140, 0, 0.3)",
            }}
        >
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div>
                        <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                        <p className="text-gray-400 text-xs">{testimonial.position}</p>
                    </div>
                </div>
            </div>

            <blockquote className="text-gray-300 text-sm leading-relaxed mb-4 italic line-clamp-4 group-hover:text-gray-200 transition-colors">
                "{testimonial.quote}"
            </blockquote>

            <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-orange-400/40"
                animate={{
                    opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-orange-400/40"
                animate={{
                    opacity: [0.8, 0.3, 0.8],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />
        </motion.div>
    );
};

const InfiniteScrollRow: React.FC<{ testimonials: any[]; direction: 'left' | 'right' }> = ({
    testimonials,
    direction = 'left',
}) => {
    const scrollerRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    const duplicatedTestimonials = [...testimonials, ...testimonials];

    useEffect(() => {
        const scroller = scrollerRef.current;
        if (!scroller) return;

        let animationFrameId: number;
        let position = 0;
        const speed = 0.8;
        let containerWidth = 0;
        let contentWidth = 0;

        const calculateWidths = () => {
            if (scroller.children.length > 0) {
                const firstChild = scroller.children[0] as HTMLElement;
                const cardWidth = firstChild.offsetWidth + 24;
                contentWidth = cardWidth * testimonials.length;
                containerWidth = contentWidth / 2;
            }
        };

        const animate = () => {
            if (!isPaused && scroller) {
                if (containerWidth === 0 || contentWidth === 0) {
                    calculateWidths();
                }

                if (direction === 'left') {
                    position -= speed;
                    if (position <= -contentWidth) {
                        position = 0;
                    }
                } else {
                    position += speed;
                    if (position >= 0) {
                        position = -contentWidth;
                    }
                }

                scroller.style.transform = `translateX(${position}px)`;
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        setTimeout(() => {
            calculateWidths();
        }, 100);

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [direction, isPaused, testimonials.length]);

    return (
        <div
            className="relative overflow-hidden py-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <motion.div
                ref={scrollerRef}
                className="flex gap-6"
                style={{ willChange: 'transform' }}
            >
                {duplicatedTestimonials.map((testimonial, index) => (
                    <TestimonialCard
                        key={`${testimonial.id}-${index}`}
                        testimonial={testimonial}
                    />
                ))}
            </motion.div>
        </div>
    );
};

export function TestimonialSection() {
    const testimonials = [
        {
            id: 1,
            name: "María González",
            position: "Directora de Operaciones",
            company: "Industrial Tech",
            image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
            logo: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
            quote: "La implementación del agente de mantenimiento predictivo revolucionó nuestra planta. Redujimos las paradas no planificadas en un 85% y el ROI fue increíble.",
            rating: 5,
            metrics: ["-85% paradas", "ROI 6 meses", "99% precisión"]
        },
        {
            id: 2,
            name: "Carlos Rodríguez",
            position: "CEO",
            company: "RetailPro",
            image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
            logo: "https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg",
            quote: "El agente de ventas inteligente transformó nuestro proceso comercial. Pasamos de perder leads valiosos a convertir el 45% de las oportunidades.",
            rating: 5,
            metrics: ["+45% conversión", "24/7 operación", "-70% tiempo"]
        },
        {
            id: 3,
            name: "Ana Martínez",
            position: "Gerente de Logística",
            company: "Global Distribution",
            image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
            logo: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
            quote: "La optimización logística con IA nos permitió reducir costos en un 25% y mejorar la eficiencia operativa. Nuestros clientes notaron la diferencia.",
            rating: 5,
            metrics: ["-25% costos", "+40% eficiencia", "99.8% precisión"]
        },
        {
            id: 4,
            name: "Diego López",
            position: "Director de TI",
            company: "ServiceCorp",
            image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
            logo: "https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg",
            quote: "El recepcionista virtual resolvió el 80% de las consultas automáticamente. Nuestro equipo ahora se enfoca en casos complejos.",
            rating: 5,
            metrics: ["80% resolución", "30s respuesta", "-60% costos"]
        },
        {
            id: 5,
            name: "Laura Mendoza",
            position: "CTO",
            company: "TechInnovate",
            image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
            logo: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
            quote: "La solución de analytics predictiva nos dio insights que nunca imaginamos. Incrementamos nuestra eficiencia operativa en un 60%.",
            rating: 5,
            metrics: ["+60% eficiencia", "Data en tiempo real", "Scalable"]
        },
        {
            id: 6,
            name: "Roberto Silva",
            position: "Head of Product",
            company: "StartupXYZ",
            image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
            logo: "https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg",
            quote: "El desarrollo de nuestra plataforma fue excepcional. Entregaron antes de lo esperado y la calidad superó todas nuestras expectativas.",
            rating: 5,
            metrics: ["Entregado antes", "Calidad premium", "Soporte 24/7"]
        }
    ];

    return (
        <section className="relative min-h-screen py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-20 left-10% w-80 h-80 bg-[#FF8C00]/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-15% w-96 h-96 bg-[#FFB90F]/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.05, 0.15, 0.05],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />

                <div className="absolute inset-0 opacity-40">
                    {[...Array(30)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                opacity: [0, 1, 0],
                                scale: [0.5, 1.5, 0.5],
                            }}
                            transition={{
                                duration: Math.random() * 4 + 2,
                                repeat: Infinity,
                                delay: Math.random() * 3,
                            }}
                        />
                    ))}
                </div>
            </div>
            <div id='faq' className="relative z-10 w-full mx-auto px-[5%]">
                <HeadingSection
                    pillText="QUE DICEN DE NOSOTROS"
                    title="Historia de éxito reales"
                    subtitle={
                        <>
                            Descubre cómo estamos transformando industrias con soluciones de vanguardia
                        </>
                    }
                />
                <div className="space-y-8 lg:space-y-12">
                    <InfiniteScrollRow
                        testimonials={testimonials}
                        direction="left"
                    />

                    <InfiniteScrollRow
                        testimonials={testimonials}
                        direction="right"
                    />
                </div>
            </div>
        </section>
    );
}