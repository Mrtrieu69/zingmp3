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
        document.body.addEventListener('click', startInteractionTimer);
        document.body.addEventListener('wheel', startInteractionTimer);

        return () => {
            document.body.removeEventListener('mousemove', startInteractionTimer);
            document.body.addEventListener('click', startInteractionTimer);
            document.body.removeEventListener('wheel', startInteractionTimer);
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, [delay]);

    return isIdle;
};

export default useListenerIdle;
