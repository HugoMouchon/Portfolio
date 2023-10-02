import { motion } from "framer-motion";
import "./transitionLeft.scss";

const transitionLeft = (OgComponent) => {
    return () => (
        <>
            <OgComponent />
            <motion.div
                className="slide-in"
                initial={{ x: "-100%", y: 0 }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
        </>
    );
};

export default (transitionLeft);