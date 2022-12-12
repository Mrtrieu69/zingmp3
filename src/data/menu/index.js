import { BiBlock } from 'react-icons/bi';
import { MdOutlineHighQuality } from 'react-icons/md';
import { BsPlayCircle, BsFlag, BsShieldCheck } from 'react-icons/bs';
import { AiOutlineInfoCircle, AiOutlinePhone } from 'react-icons/ai';
import { RiAdvertisementLine } from 'react-icons/ri';
import { FiLogOut } from 'react-icons/fi';

export const MENU_SETTING = {
    MENU_MAIN: [
        { iconLeft: <BiBlock />, title: 'Blocklist' },
        { iconLeft: <MdOutlineHighQuality />, title: 'Music quality' },
        { iconLeft: <BsPlayCircle />, title: 'Display' },
    ],
    MENU_FOOTER: [
        { iconLeft: <AiOutlineInfoCircle />, title: 'Introduce' },
        { iconLeft: <BsFlag />, title: 'Feedback' },
        { iconLeft: <AiOutlinePhone />, title: 'Contact' },
        { iconLeft: <RiAdvertisementLine />, title: 'Advertisement' },
        { iconLeft: <BsShieldCheck />, title: 'Privacy Policy' },
    ],
};

export const MENU_ACCOUNT = {
    MENU_FOOTER: [{ iconLeft: <FiLogOut />, title: 'Logout' }],
};
