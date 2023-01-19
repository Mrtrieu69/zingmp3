import clientAxios from '../api/clientAxios';
export const getData = async (url) => {
    const { data } = clientAxios(url);

    return data;
};
