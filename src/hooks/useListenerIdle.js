import { useState, useEffect, useRef } from 'react';

const useListenerIdle = (delay) => {
    const [isIdle, setIsIdle] = useState(false);

    const timerRef = useRef();

    useEffect(() => {
        const startInteractionTimer = () => {
            setIsIdle(false);
            clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => setIsIdle(true), delay);
        };

        document.body.addEventListener('mousemove', startInteractionTimer);

        return () => {
            document.body.removeEventListener('mousemove', startInteractionTimer);
            if (timerRef.current) {
                clearTimeout(timerRef);
            }
        };
    }, [delay]);

    return isIdle;
};

export default useListenerIdle;
