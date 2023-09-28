import { motion } from "framer-motion";
import "./transitionRight.scss";

const transitionRight = (OgComponent) => {
    return () => (
        <>
            <OgComponent />
            <motion.div
                className="slide-in"
                initial={{ x: "100%", y: 0 }}
                animate={{ x: "-100%" }}
                transition={{ duration: 1.7, ease: [0.22, 1, 0.36, 1] }}
            />
        </>
    );
};

export default (transitionRight);