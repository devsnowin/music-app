import useSWR from 'swr'
import fetcher from './fetcher'

/** Note:
* 	SWR is like react query.
* 	It is used fetch data and store the data locally.
*/

export const useMe = () => {
    const {data, error} = useSWR('/me', fetcher)

	return {
        user: data,
		isLoading: !data && !error,
		isError: error,
    }
}

export const usePlaylist = () => {
    const {data, error} = useSWR('/playlist', fetcher)

	return {
        playlists: (data as any) || [],
		isLoading: !data && !error,
		isError: error,
    }
}
