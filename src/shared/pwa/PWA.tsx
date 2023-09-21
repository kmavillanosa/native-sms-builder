import { ReactNode, useState } from "react";
import { useServiceWorker } from "@/shared/pwa/initializeServiceWorker";
import { useEffect } from "react";

interface PWAProps {
    children: ReactNode;
}

const PWA: React.FC<PWAProps> = ({ children }) => {
    const { initialize } = useServiceWorker();

    useEffect(() => {
        initialize();
    }, []);


    return children;
};

export default PWA;
