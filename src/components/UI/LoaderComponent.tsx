import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export const LoaderComponent = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => {
                onLoadingComplete();
            }, 800);
        }, 3500);

        return () => clearTimeout(timer);
    }, [onLoadingComplete]);

    const svgVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1.2,
                ease: [0.6, 0.05, 0.01, 0.9]
            }
        }
    };

    const pathVariants = {
        hidden: {
            pathLength: 0,
            opacity: 0
        },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: {
                    duration: 2.5,
                    ease: [0.43, 0.13, 0.23, 0.96],
                    delay: 0.5
                },
                opacity: {
                    duration: 0.8,
                    delay: 0.5
                }
            }
        }
    };

    const containerVariants = {
        hidden: {
            opacity: 1
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.8,
                ease: [0.83, 0, 0.17, 1]
            }
        }
    };

    const backgroundVariants = {
        hidden: {
            backdropFilter: "blur(0px)",
            backgroundColor: "#020202"
        },
        visible: {
            backdropFilter: "blur(20px)",
            backgroundColor: "#020202",
            transition: {
                duration: 1.2,
                ease: [0.25, 0.1, 0.25, 1]
            }
        },
        exit: {
            backdropFilter: "blur(0px)",
            backgroundColor: "rgba(12, 14, 27, 0)",
            transition: {
                duration: 0.8,
                ease: [0.83, 0, 0.17, 1]
            }
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed z-50 inset-0 flex items-center justify-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <motion.div
                        className="absolute inset-0"
                        variants={backgroundVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    />

                    <motion.div
                        className="relative z-10"
                        variants={svgVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="140"
                            height="140"
                            fill="none"
                            viewBox="0 0 297 294"
                            className="drop-shadow-2xl"
                        >
                            <motion.path
                                stroke="#FFBF00"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M168.299 42.983c70.765 2.265 127.381 57.473 127.381 125.25 0 67.778-56.616 123.001-127.381 125.249v-80.519c23.969-2.14 42.751-21.325 42.751-44.712s-18.8-42.556-42.751-44.712zM127.881 81.401c-23.953 2.167-42.751 21.421-42.751 44.911 0 23.488 18.78 42.759 42.751 44.908v80.884C57.118 249.847.5 194.377.5 126.293S57.118 2.774 127.881.517zM167.297 42.313v80.554L128.882 81.82V1.266zM167.297 212.899v79.842l-38.415-40.686v-79.843z"
                                variants={pathVariants}
                                initial="hidden"
                                animate="visible"
                            />
                        </motion.svg>
                    </motion.div>

                    <div className="absolute inset-0 overflow-hidden">
                        {[...Array(12)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-yellow-400/20 rounded-full"
                                initial={{
                                    x: Math.random() * window.innerWidth,
                                    y: Math.random() * window.innerHeight,
                                    opacity: 0
                                }}
                                animate={{
                                    opacity: [0, 0.4, 0],
                                    scale: [0, 1.2, 0]
                                }}
                                transition={{
                                    duration: 3 + Math.random() * 2,
                                    repeat: Infinity,
                                    delay: Math.random() * 2,
                                    ease: "easeOut"
                                }}
                            />
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};