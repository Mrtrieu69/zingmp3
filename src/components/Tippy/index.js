import React from 'react';
import Tippy from '@tippyjs/react';

const TippyCustom = ({ title, children }) => {
    return <Tippy content={<span className="tippy">{title}</span>}>{children}</Tippy>;
};

export default TippyCustom;
