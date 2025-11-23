import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { RxPlus } from "react-icons/rx";

interface AccordionItemProps {
    question: string;
    answer: string;
    value: string;
}

export const CustomAccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            className="border border-white/10 rounded-xl overflow-hidden hover:border-orange-500/30 transition-all duration-300 backdrop-blur-sm"
            whileHover={{ y: -2 }}
        >
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between text-left text-white font-regular cursor-pointer p-6 hover:text-orange-300 transition-colors bg-transparent"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                <span className="pr-4 flex-1">{question}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="shrink-0"
                >
                    <RxPlus className="size-6 text-orange-400 cursor-pointer" />
                </motion.div>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{
                            height: 0,
                            opacity: 0
                        }}
                        animate={{
                            height: "auto",
                            opacity: 1
                        }}
                        exit={{
                            height: 0,
                            opacity: 0
                        }}
                        transition={{
                            duration: 0.4,
                            ease: "easeOut"
                        }}
                        className="overflow-hidden"
                    >
                        <div className="text-gray-300 leading-relaxed p-6 bg-white/5 border-t border-white/10">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};