import axios, { AxiosResponse } from 'axios';


export class ComicsApi {

    onFetchComics(comicNumber: number): Promise<AxiosResponse<any>> {
        const url = '/comics/' + comicNumber;
        // const url = `https://xkcd.com/${comicNumber}/info.0.json`;
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }

        return axios.get(url, { headers })
    }

}