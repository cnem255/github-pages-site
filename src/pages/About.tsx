import Container from "../components/Container";
import { motion, useScroll, useTransform } from 'framer-motion';

export default function About() {
    let { scrollY } = useScroll();
    let y = useTransform(scrollY, [0, 800], ["0%", "25%"]);

    return (
        <div className="w-screen h-screen center">
            <motion.div className="w-full h-full bg-mountain bg-cover absolute -z-50 inset-x-0 mx-auto" style={{ y }}>
            
            </motion.div>
            <h1 className="font-bebas-neue text-black dark:text-white text-8xl max-sm:text-6xl select-none text-center">About</h1>
        </div>
    )
}