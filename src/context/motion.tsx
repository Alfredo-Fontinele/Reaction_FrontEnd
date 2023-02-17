import { IListMotion, listMotion } from "./../animations/motion/listMotion";
import { IItemMotion } from "./../animations/motion/itemMotion";
import { itemMotion } from "../animations/motion/itemMotion";
import { createContext, useContext } from "react";
import { AnimatePresence } from "framer-motion";
import React from "react";

interface IMotionContext {
    listMotion: IListMotion;
    itemMotion: IItemMotion;
}

const MotionContext = createContext<IMotionContext>({} as IMotionContext);

export const MotionProvider = ({ children }: React.PropsWithChildren) => {
    return (
        <MotionContext.Provider value={{ listMotion, itemMotion }}>
            <AnimatePresence>{children}</AnimatePresence>
        </MotionContext.Provider>
    );
};

export const useMotion = () => useContext(MotionContext);
