import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { HeadingSection } from './UI/HeadingSection';
import { FiX, FiMessageCircle } from 'react-icons/fi';

interface TestimonialCardProps {
    testimonial: any;
    onClick: (testimonial: any) => void;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, onClick }) => {
    return (
        <motion.div
            className="shrink-0 w-80 h-auto border border-white/10 rounded-2xl p-6 backdrop-blur-sm transition-all duration-500 group relative cursor-pointer"
            whileHover={{
                y: -8,
                scale: 1.02,
                borderColor: "rgba(255, 140, 0, 0.3)",
            }}
            onClick={() => onClick(testimonial)}
        >
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div>
                        <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                        <p className="text-gray-400 text-xs">{testimonial.position}</p>
                        <p className="text-orange-400 text-xs font-medium mt-1">{testimonial.company}</p>
                    </div>
                </div>
            </div>

            <blockquote className="text-gray-300 text-sm leading-relaxed mb-4 italic line-clamp-4 group-hover:text-gray-200 transition-colors">
                "{testimonial.quote}"
            </blockquote>

            {/* Indicador visual de que es clickeable */}
            <motion.div
                className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center border border-orange-500/30">
                    <FiMessageCircle className="text-orange-400 text-xs" />
                </div>
            </motion.div>

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

const TestimonialModal: React.FC<{
    testimonial: any;
    isOpen: boolean;
    onClose: () => void;
}> = ({ testimonial, isOpen, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!testimonial) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    {/* Backdrop con blur */}
                    <motion.div
                        className="absolute inset-0 bg-black/80 backdrop-blur-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Contenido del modal */}
                    <motion.div
                        ref={modalRef}
                        className="relative w-full max-w-2xl bg-gray-900/90 backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden"
                        initial={{
                            scale: 0.8,
                            opacity: 0,
                            y: 50
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                            y: 0
                        }}
                        exit={{
                            scale: 0.8,
                            opacity: 0,
                            y: 50
                        }}
                        transition={{
                            type: "spring",
                            damping: 25,
                            stiffness: 300,
                            duration: 0.6
                        }}
                    >
                        {/* Header con gradiente */}
                        <div className="relative p-8 border-b border-white/10 bg-linear-to-r from-orange-500/10 to-transparent">
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <motion.h3
                                        className="text-2xl font-bold text-white mb-2"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        {testimonial.name}
                                    </motion.h3>
                                    <motion.p
                                        className="text-orange-400 font-semibold text-sm mb-1"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        {testimonial.position}
                                    </motion.p>
                                    <motion.p
                                        className="text-gray-400 text-sm"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        {testimonial.company}
                                    </motion.p>
                                </div>

                                {/* Botón cerrar */}
                                <motion.button
                                    onClick={onClose}
                                    className="shrink-0 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                                    whileHover={{ rotate: 90 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <FiX className="text-lg" />
                                </motion.button>
                            </div>
                        </div>

                        {/* Contenido de la review */}
                        <div className="p-8">
                            <motion.div
                                className="relative"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                            >
                                <FiMessageCircle className="absolute -top-2 -left-2 text-orange-500/20 text-4xl" />
                                <blockquote className="text-gray-300 text-lg leading-relaxed italic pl-6">
                                    "{testimonial.quote}"
                                </blockquote>
                                <FiMessageCircle className="absolute -bottom-2 -right-2 text-orange-500/20 text-4xl transform rotate-180" />
                            </motion.div>

                            {/* Elementos decorativos */}
                            <motion.div
                                className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-orange-400/30"
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
                                className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-orange-400/30"
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
                        </div>

                        {/* Footer con efecto glow */}
                        <div className="px-8 py-4 border-t border-white/10 bg-linear-to-r from-transparent via-orange-500/5 to-transparent">
                            <motion.div
                                className="text-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                            >
                                <span className="text-gray-400 text-sm">Testimonio completo</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const InfiniteScrollRow: React.FC<{
    testimonials: any[];
    direction: 'left' | 'right';
    onTestimonialClick: (testimonial: any) => void;
}> = ({
    testimonials,
    direction = 'left',
    onTestimonialClick
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
                            onClick={onTestimonialClick}
                        />
                    ))}
                </motion.div>
            </div>
        );
    };

export function TestimonialSection() {
    const [selectedTestimonial, setSelectedTestimonial] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const testimonials = [
        {
            id: 1,
            name: "Andres Roganovich",
            position: "Director",
            company: "Asociación Civil Sembrando Valores",
            quote: "El desarrollo de nuestra plataforma web ha transformado completamente nuestra capacidad de llegar a más comunidades. El equipo entendió perfectamente nuestra misión y creó una solución que realmente impacta."
        },
        {
            id: 3,
            name: "Daniel Affre",
            position: "Director",
            company: "Jornadas Misioneras",
            quote: "Nuestra nueva plataforma ha facilitado enormemente la organización de eventos y la comunicación con nuestros voluntarios. Un trabajo impecable que superó todas nuestras expectativas."
        },
        {
            id: 5,
            name: "Pablo Kerestesachi",
            position: "CTO",
            company: "Boxicred",
            quote: "Como CTO, valoro especialmente la calidad del código y la arquitectura escalable que implementaron. Un partner tecnológico confiable que recomendaría sin dudar."
        },
        {
            id: 4,
            name: "Daniel Russo",
            position: "Director",
            company: "Red Misiones Mundiales",
            quote: "El sitio web desarrollado ha sido fundamental para expandir nuestro alcance global. La atención al detalle y el entendimiento de nuestras necesidades fueron extraordinarios."
        },
        {
            id: 6,
            name: "Marcia Schell",
            position: "Marketing leader",
            company: "Bizit Global",
            quote: "La estrategia digital implementada ha elevado nuestra presencia online significativamente. Los resultados en engagement y conversiones han sido remarkable."
        },
        {
            id: 2,
            name: "Bruno Medina",
            position: "Secretario",
            company: "Asociación Civil Sembrando Valores",
            quote: "La experiencia con el equipo de desarrollo fue excepcional. No solo entregaron un producto de calidad, sino que comprendieron la esencia de nuestro trabajo social y lo reflejaron digitalmente."
        },
        {
            id: 7,
            name: "Francisco Mendoza",
            position: "Marketing leader",
            company: "Consultor Independiente",
            quote: "Trabajar con este equipo ha sido un antes y después para mi negocio. La plataforma desarrollada me ha permitido escalar mis servicios y atraer clientes de mayor calidad."
        }
    ];

    const handleTestimonialClick = (testimonial: any) => {
        setSelectedTestimonial(testimonial);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedTestimonial(null), 400);
    };

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
                        onTestimonialClick={handleTestimonialClick}
                    />

                    <InfiniteScrollRow
                        testimonials={testimonials}
                        direction="right"
                        onTestimonialClick={handleTestimonialClick}
                    />
                </div>
            </div>

            {/* Modal */}
            <TestimonialModal
                testimonial={selectedTestimonial}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </section>
    );
}