import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

interface BackgroundProviderProps {
    children: ReactNode;
    className?: string;
}

export function BackgroundProvider({ children, className = '' }: BackgroundProviderProps) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.1, 0.25, 0.65, 0.85, 1],
        [
            '#010101',
            '#020205',
            '#111426',
            '#111426',
            '#020205',
            '#020208'
        ]
    );

    const parallaxDeepSpace = useTransform(scrollYProgress, [0, 1], [-300, 300]);
    const parallaxGalaxies = useTransform(scrollYProgress, [0, 1], [-150, 150]);
    const parallaxForeground = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    const springConfig = { damping: 20, stiffness: 100 };
    const springDeep = useSpring(parallaxDeepSpace, springConfig);
    const springMid = useSpring(parallaxGalaxies, springConfig);
    const springForeground = useSpring(parallaxForeground, springConfig);

    const stars = Array.from({ length: 300 }, (_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 0.3,
        brightness: Math.random() * 0.8 + 0.2,
        layer: Math.floor(Math.random() * 4),
        pulseSpeed: Math.random() * 6 + 3,
        color: '#FFFFFF'
    }));

    // Nebulosas cósmicas sutiles
    const cosmicNebulae = [
        {
            id: 1,
            width: '600px',
            height: '300px',
            top: '25%',
            left: '-5%',
            colors: 'from-purple-500/10 via-cyan-400/8 to-transparent',
            speed: 35,
            scale: 1.1
        },
        {
            id: 2,
            width: '500px',
            height: '250px',
            top: '45%',
            right: '-3%',
            colors: 'from-cyan-400/12 via-blue-500/10 to-transparent',
            speed: 40,
            scale: 1.05
        },
        {
            id: 3,
            width: '550px',
            height: '280px',
            bottom: '25%',
            left: '15%',
            colors: 'from-blue-500/15 via-purple-500/12 to-transparent',
            speed: 30,
            scale: 1.15
        }
    ];

    // Estrellas fugaces
    const shootingStars = [
        { id: 1, startX: '-2%', startY: '5%', endX: '102%', endY: '25%', duration: 2, delay: 0, size: 'w-0.5 h-0.5' },
        { id: 2, startX: '101%', startY: '12%', endX: '-1%', endY: '32%', duration: 2.5, delay: 8, size: 'w-0.5 h-0.5' },
        { id: 3, startX: '45%', startY: '-1%', endX: '55%', endY: '15%', duration: 1.8, delay: 15, size: 'w-0.3 h-0.3' },
        { id: 4, startX: '-3%', startY: '35%', endX: '103%', endY: '55%', duration: 3, delay: 25, size: 'w-0.7 h-0.7' },
        { id: 5, startX: '103%', startY: '42%', endX: '-2%', endY: '62%', duration: 3.2, delay: 35, size: 'w-0.6 h-0.6' },
        { id: 6, startX: '-4%', startY: '65%', endX: '104%', endY: '85%', duration: 4, delay: 50, size: 'w-1 h-1' },
        { id: 7, startX: '104%', startY: '72%', endX: '-3%', endY: '92%', duration: 4.5, delay: 65, size: 'w-0.8 h-0.8' },
        { id: 8, startX: '20%', startY: '-2%', endX: '80%', endY: '102%', duration: 3.5, delay: 80, size: 'w-0.6 h-0.6' },
        { id: 9, startX: '80%', startY: '-1%', endX: '20%', endY: '101%', duration: 3.8, delay: 95, size: 'w-0.5 h-0.5' }
    ];

    return (
        <section
            ref={containerRef}
            className={`relative min-h-screen overflow-hidden ${className}`}
        >
            {/* FONDO PRINCIPAL CON TRANSICIÓN DE COLOR */}
            <motion.div
                className="absolute inset-0"
                style={{ backgroundColor }}
            >
                {/* Capa de estrellas profundas */}
                <motion.div className="absolute inset-0" style={{ y: springDeep }}>
                    {stars.filter(star => star.layer === 0).map(star => (
                        <motion.div
                            key={star.id}
                            className="absolute bg-white rounded-full"
                            style={{
                                top: star.top,
                                left: star.left,
                                width: `${star.size}px`,
                                height: `${star.size}px`,
                                opacity: star.brightness * 0.3
                            }}
                            animate={{
                                opacity: [star.brightness * 0.15, star.brightness * 0.3, star.brightness * 0.15],
                                scale: [1, 1.2, 1]
                            }}
                            transition={{
                                duration: star.pulseSpeed * 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </motion.div>

                {/* Nebulosas cósmicas sutiles */}
                {cosmicNebulae.map(nebula => (
                    <motion.div
                        key={nebula.id}
                        className={`absolute bg-linear-to-r ${nebula.colors} rounded-full blur-2xl`}
                        style={{
                            width: nebula.width,
                            height: nebula.height,
                            top: nebula.top,
                            left: nebula.left,
                            right: nebula.right,
                            y: springMid
                        }}
                        animate={{
                            x: [0, 50, 0],
                            scale: [1, nebula.scale, 1]
                        }}
                        transition={{
                            duration: nebula.speed,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}

                {/* Capa de estrellas medias */}
                <motion.div className="absolute inset-0" style={{ y: springMid }}>
                    {stars.filter(star => star.layer === 1 || star.layer === 2).map(star => (
                        <motion.div
                            key={star.id}
                            className="absolute bg-white rounded-full"
                            style={{
                                top: star.top,
                                left: star.left,
                                width: `${star.size}px`,
                                height: `${star.size}px`,
                                opacity: star.brightness * (star.layer === 1 ? 0.6 : 0.8)
                            }}
                            animate={{
                                opacity: [
                                    star.brightness * 0.3,
                                    star.brightness * (star.layer === 1 ? 0.6 : 0.8),
                                    star.brightness * 0.3
                                ],
                                scale: [1, 1.3, 1]
                            }}
                            transition={{
                                duration: star.pulseSpeed,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </motion.div>

                {/* Estrellas fugaces */}
                {shootingStars.map(star => (
                    <motion.div
                        key={star.id}
                        className={`absolute ${star.size} bg-white rounded-full blur-sm`}
                        style={{
                            left: star.startX,
                            top: star.startY
                        }}
                        animate={{
                            left: [star.startX, star.endX],
                            top: [star.startY, star.endY],
                            opacity: [0, 1, 0.8, 0]
                        }}
                        transition={{
                            duration: star.duration,
                            delay: star.delay,
                            repeat: Infinity,
                            ease: "easeOut"
                        }}
                    >
                        <motion.div
                            className="absolute -inset-1 bg-linear-to-r from-transparent via-white to-transparent blur-md"
                            animate={{
                                scale: [0.3, 1.5, 0.3],
                                opacity: [0, 0.6, 0]
                            }}
                            transition={{
                                duration: star.duration * 0.3,
                                repeat: Infinity,
                                ease: "easeOut"
                            }}
                        />
                    </motion.div>
                ))}

                {/* Capa de estrellas delanteras */}
                <motion.div className="absolute inset-0" style={{ y: springForeground }}>
                    {stars.filter(star => star.layer === 3).map(star => (
                        <motion.div
                            key={star.id}
                            className="absolute bg-white rounded-full"
                            style={{
                                top: star.top,
                                left: star.left,
                                width: `${star.size}px`,
                                height: `${star.size}px`,
                                opacity: star.brightness
                            }}
                            animate={{
                                opacity: [star.brightness * 0.6, star.brightness, star.brightness * 0.6],
                                scale: [1, 1.4, 1]
                            }}
                            transition={{
                                duration: star.pulseSpeed * 0.8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </motion.div>

                {/* Estrellas con movimiento adicional */}
                <motion.div className="absolute inset-0" style={{ y: springForeground }}>
                    {Array.from({ length: 40 }, (_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-0.5 h-0.5 bg-white/40 rounded-full"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -80, 0],
                                x: [0, Math.random() * 40 - 20, 0],
                                opacity: [0, 0.5, 0],
                                scale: [1, 2, 1]
                            }}
                            transition={{
                                duration: Math.random() * 10 + 10,
                                delay: Math.random() * 20,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </motion.div>
            </motion.div>

            {/* Contenido */}
            <div className="relative z-10 h-full">
                {children}
            </div>
        </section>
    );
}