import React from 'react';
import { Helmet } from 'react-helmet-async';
import { LoaderPage } from '../../components/Icons';
// import { useQuery } from 'react-query';
// import { getData } from '../../utils/getData';

const Radio = () => {
    return (
        <>
            <Helmet>
                <title>Radio | See the hottest song and album right now</title>
            </Helmet>
            <h1 style={{ height: 2000 }}>
                Radio Page
                <LoaderPage />
            </h1>
        </>
    );
};

export default Radio;
