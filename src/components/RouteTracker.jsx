import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const RouteTracker = () => {
    const location = useLocation();

    useEffect(() => {
        if (window.gtag) {
            window.gtag("config", "G-W67Y2S2S28", {
                page_path: location.pathname,
            });
        }
    }, [location]);

    return null; // no UI
};

export default RouteTracker;
