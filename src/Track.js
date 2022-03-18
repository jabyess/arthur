import axios from 'axios'
import { API_KEY, API_ROOT } from './constants';

const Track = ({track}) => {
    const {artist, image,  name, url, mbid} = track;

    const fetchDetail = async () => {
        let res = await axios({
            method: "get",
            url: API_ROOT, 
            params: {
                api_key: API_KEY,
                method: "album.getinfo",
                mbid
            },

        })

        console.log(res)
    }
    return (
        <div onClick={() => fetchDetail(mbid)}>
            <h1>Artist: {artist}</h1> 
            <p>Title: {name}</p>
        </div>
    )

}

export default Track;