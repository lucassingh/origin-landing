import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import video from '../assets/videos/hero/video.mp4'

export function HeroSection() {
    const containerRef = useRef(null)
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isMobile, setIsMobile] = useState(false)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }

        checkMobile()
        window.addEventListener('resize', checkMobile)

        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    const videoInset = useTransform(scrollYProgress, [0, 0.6], [
        isMobile ? "20px 0px 0px 0px" : "110px 0px 0px 0px",
        "0px"
    ])
    const videoRadius = useTransform(scrollYProgress, [0, 0.4], [10, 0])
    const videoScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])
    const videoOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.9])

    const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
    const titleY = useTransform(scrollYProgress, [0, 0.3], [0, -80])

    const subtitleOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])
    const subtitleY = useTransform(scrollYProgress, [0, 0.25], [0, -60])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1.5,
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 40,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.2,
                ease: [0.25, 0.1, 0.25, 1]
            }
        }
    }

    const wordVariants = {
        hidden: {
            opacity: 0,
            y: 30,
        },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.5 + (i * 0.1),
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1]
            }
        })
    }

    const tagVariants = {
        hidden: {
            opacity: 0,
            x: -20,
        },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: 1.8 + (i * 0.15),
                duration: 0.6,
                ease: "easeOut"
            }
        })
    }

    const emphasisVariants = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 1.2 + (i * 0.1),
                duration: 1,
                ease: [0.25, 0.1, 0.25, 1]
            }
        }),
        glow: {
            color: ["#FFFFFF", "#F0F0F0", "#FFFFFF"],
            textShadow: [
                "0 0 0px rgba(255,255,255,0)",
                "0 0 15px rgba(255,255,255,0.25)",
                "0 0 0px rgba(255,255,255,0)"
            ],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    }

    useEffect(() => {
        const videoElement = videoRef.current
        if (!videoElement) return

        const forceAutoplay = async () => {
            try {
                videoElement.muted = true
                await videoElement.play()
                console.log('Autoplay exitoso')
            } catch (error) {
                console.log('Autoplay falló, intentando de nuevo...', error)

                setTimeout(() => {
                    videoElement.play().catch(e => {
                        console.log('Segundo intento falló:', e)
                    })
                }, 500)
            }
        }

        if (videoElement.readyState >= 3) {
            forceAutoplay()
        } else {
            videoElement.addEventListener('loadeddata', forceAutoplay)
        }
        return () => {
            videoElement.removeEventListener('loadeddata', forceAutoplay)
        }
    }, [])

    useEffect(() => {
        const timeout = setTimeout(() => {
            window.dispatchEvent(new Event('scroll'));
        }, 100);

        return () => clearTimeout(timeout);
    }, []);

    const titleLine1Desktop = "Diseño y desarrollo web"
    const titleLine2Desktop = ["que", "impulsan", "tu", "negocio"]

    const titleLine1Mobile = "Diseño y desarrollo"
    const titleLine2Mobile = "web que impulsan"
    const titleLine3Mobile = ["tu", "negocio"]

    const serviceTags = ["#development", "#apps", "#branding", "#websites", "#UX/UI"]

    return (
        <motion.section
            id='home'
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div
                className="absolute z-0 overflow-hidden"
                style={{
                    inset: videoInset,
                    borderRadius: videoRadius,
                    scale: videoScale,
                    opacity: videoOpacity,
                }}
            >
                <motion.video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    webkit-playsinline="true"
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    preload="auto"
                    onLoadedMetadata={(e) => {
                        const video = e.target as HTMLVideoElement;
                        video.currentTime = 0.1;
                    }}
                >
                    <source src={video} type="video/mp4" />
                </motion.video>

                <motion.div
                    className="absolute inset-0 bg-black/20 pointer-events-none"
                    animate={{
                        opacity: [0.15, 0.25, 0.15],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <motion.div
                    className="absolute inset-0 bg-black/15"
                    style={{
                        opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0])
                    }}
                />
            </motion.div>

            <div className="relative z-10 w-full h-screen flex items-center justify-center px-6">
                <div className="text-center">
                    {/* MODIFICACIÓN: "Origin" más grande */}
                    <motion.h1
                        className="font-gilroy font-light text-white text-6xl sm:text-7xl lg:text-9xl mb-6 sm:mb-8 tracking-wider"
                        variants={itemVariants}
                    >
                        Origin
                    </motion.h1>

                    <motion.div
                        className="font-gilroy font-light text-white text-xl sm:text-2xl lg:text-5xl leading-snug sm:leading-tight mb-8 sm:mb-12 tracking-wider"
                        variants={itemVariants}
                        style={{
                            opacity: titleOpacity,
                            y: titleY
                        }}
                    >
                        {/* VERSIÓN DESKTOP (2 líneas) */}
                        {!isMobile ? (
                            <>
                                <motion.div className="mb-2 sm:mb-3">
                                    {titleLine1Desktop.split(" ").map((word, index) => (
                                        <motion.span
                                            key={index}
                                            custom={index}
                                            variants={wordVariants}
                                            className="inline-block mr-2 sm:mr-3"
                                        >
                                            {word}
                                        </motion.span>
                                    ))}
                                </motion.div>

                                <motion.div>
                                    {titleLine2Desktop.map((word, index) => {
                                        const isEmphasis = word === "tu" || word === "negocio";
                                        const emphasisIndex = word === "tu" ? 0 : 1;

                                        return (
                                            <motion.span
                                                key={index}
                                                custom={isEmphasis ? emphasisIndex : index + titleLine1Desktop.split(" ").length}
                                                variants={isEmphasis ? emphasisVariants : wordVariants}
                                                className={`inline-block mr-2 sm:mr-3 ${isEmphasis ? "relative" : ""}`}
                                                animate={isEmphasis ? "glow" : ""}
                                                whileHover={
                                                    isEmphasis
                                                        ? {
                                                            scale: 1.05,
                                                            transition: { duration: 0.3 }
                                                        }
                                                        : {}
                                                }
                                            >
                                                {word}
                                                {isEmphasis && (
                                                    <motion.span
                                                        className="absolute bottom-0 left-0 w-full h-px bg-white/30"
                                                        initial={{ scaleX: 0 }}
                                                        animate={{
                                                            scaleX: 1,
                                                            transition: {
                                                                delay: 2.5 + (emphasisIndex * 0.2),
                                                                duration: 0.6,
                                                                ease: "easeOut"
                                                            }
                                                        }}
                                                    />
                                                )}
                                            </motion.span>
                                        );
                                    })}
                                </motion.div>
                            </>
                        ) : (
                            // VERSIÓN MOBILE (3 líneas)
                            <>
                                <motion.div className="mb-2">
                                    {titleLine1Mobile.split(" ").map((word, index) => (
                                        <motion.span
                                            key={index}
                                            custom={index}
                                            variants={wordVariants}
                                            className="inline-block mr-2"
                                        >
                                            {word}
                                        </motion.span>
                                    ))}
                                </motion.div>

                                <motion.div className="mb-2">
                                    {titleLine2Mobile.split(" ").map((word, index) => (
                                        <motion.span
                                            key={index}
                                            custom={index + titleLine1Mobile.split(" ").length}
                                            variants={wordVariants}
                                            className="inline-block mr-2"
                                        >
                                            {word}
                                        </motion.span>
                                    ))}
                                </motion.div>

                                <motion.div>
                                    {titleLine3Mobile.map((word, index) => {
                                        const isEmphasis = word === "tu" || word === "negocio";
                                        const emphasisIndex = word === "tu" ? 0 : 1;

                                        return (
                                            <motion.span
                                                key={index}
                                                custom={isEmphasis ? emphasisIndex : index + titleLine1Mobile.split(" ").length + titleLine2Mobile.split(" ").length}
                                                variants={isEmphasis ? emphasisVariants : wordVariants}
                                                className={`inline-block mr-2 ${isEmphasis ? "relative" : ""}`}
                                                animate={isEmphasis ? "glow" : ""}
                                                whileHover={
                                                    isEmphasis
                                                        ? {
                                                            scale: 1.05,
                                                            transition: { duration: 0.3 }
                                                        }
                                                        : {}
                                                }
                                            >
                                                {word}
                                                {isEmphasis && (
                                                    <motion.span
                                                        className="absolute bottom-0 left-0 w-full h-px bg-white/30"
                                                        initial={{ scaleX: 0 }}
                                                        animate={{
                                                            scaleX: 1,
                                                            transition: {
                                                                delay: 2.5 + (emphasisIndex * 0.2),
                                                                duration: 0.6,
                                                                ease: "easeOut"
                                                            }
                                                        }}
                                                    />
                                                )}
                                            </motion.span>
                                        );
                                    })}
                                </motion.div>
                            </>
                        )}
                    </motion.div>

                    <motion.div
                        className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6 sm:mt-8"
                        variants={itemVariants}
                        style={{
                            opacity: subtitleOpacity,
                            y: subtitleY
                        }}
                    >
                        {serviceTags.map((tag, index) => (
                            <motion.span
                                key={index}
                                custom={index}
                                variants={tagVariants}
                                className="text-xs sm:text-sm font-light tracking-wide text-white/40 hover:text-white/60 transition-colors duration-300 cursor-default"
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* MODIFICACIÓN: Scroll indicator más arriba en mobile */}
            <motion.div
                className={`absolute ${isMobile ? 'bottom-10' : 'bottom-6'} left-1/2 transform -translate-x-1/2 z-10`}
                style={{
                    opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0])
                }}
            >
                <motion.div
                    className="flex flex-col items-center gap-1"
                    animate={{
                        y: [0, 6, 0],
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <motion.div
                        animate={{
                            opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="w-px h-6 sm:h-8 bg-white/30"
                    />
                    <motion.p
                        className="text-xs font-light tracking-widest text-white/30 uppercase"
                        animate={{
                            opacity: [0.4, 0.7, 0.4]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        Scroll
                    </motion.p>
                </motion.div>
            </motion.div>
        </motion.section>
    )
}