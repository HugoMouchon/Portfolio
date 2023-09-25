import { motion } from "framer-motion";
import "./transitionRight.scss";

const transition = (OgComponent) => {
    return () => (
        <>
            <OgComponent />
            <motion.div
                className="slide-in"
                initial={{ x: "0%", y: 0}}
                animate={{ x: "-100%" }}
                transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
            />
        </>
    );
};

export default (transition);