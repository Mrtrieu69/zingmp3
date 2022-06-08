import { useEffect, useRef, useState } from 'react';

const useTransitionShow = (delay) => {
    const [isShow, setIsShow] = useState(false);
    const [isTransition, setIsTransition] = useState(false);

    let timeout = useRef();

    useEffect(() => {
        if (isShow) {
            setIsTransition(isShow);
        } else {
            timeout.current = setTimeout(() => setIsTransition(isShow), delay);
        }

        return () => {
            if (timeout.current) {
                clearTimeout(timeout.current);
            }
        };
    }, [isShow, delay]);

    return { isTransition, isShow, setIsShow };
};

export default useTransitionShow;
