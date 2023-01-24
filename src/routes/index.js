// Pages
import { Home, MyMusic, Radio, ZingChart, Following, Album } from '../pages';

// icons
import {
    BsMusicPlayer,
    BsPlayCircle,
    BsReverseLayoutTextWindowReverse,
    BsMusicNoteBeamed,
    BsStar,
    BsCameraVideo,
} from 'react-icons/bs';
import { AiOutlineLineChart } from 'react-icons/ai';
import { VscRadioTower } from 'react-icons/vsc';
import { BiCategoryAlt } from 'react-icons/bi';

import { IconSong, IconPlaylist, IconRecently } from '../components/Icons';

// main routes
export const mainLinks = [
    { path: '/mymusic', component: MyMusic, title: 'Personal', iconLeft: <BsMusicPlayer /> },
    { path: '/', component: Home, title: 'Explore', iconLeft: <BsPlayCircle /> },
    { path: '/zingchart', component: ZingChart, title: '#zingchart', iconLeft: <AiOutlineLineChart /> },
    { path: '/radio', component: Radio, title: 'Radio', iconLeft: <VscRadioTower />, separate: 'Live' },
    // { path: '/following', component: Following, title: 'Following', iconLeft: <BsReverseLayoutTextWindowReverse /> },
];

export const mainRoutes = [
    { path: '/mymusic', component: MyMusic },
    { path: '/album/:idList', component: Album },
    { path: '/', component: Home },
    { path: '/zingchart', component: ZingChart },
    { path: '/radio', component: Radio },
    // { path: '/following', component: Following },
];

// Secondary routes
export const secondaryRoutes = [
    { title: 'New Music', iconLeft: <BsMusicNoteBeamed /> },
    { title: 'Category', iconLeft: <BiCategoryAlt /> },
    { title: 'Top 100', iconLeft: <BsStar /> },
    { title: 'Mv', iconLeft: <BsCameraVideo /> },
];

// libraries
export const libraries = [
    { title: 'Songs', iconLeft: <IconSong /> },
    { title: 'Playlist', iconLeft: <IconPlaylist /> },
    { title: 'Recently', iconLeft: <IconRecently /> },
];
