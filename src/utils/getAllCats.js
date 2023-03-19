import useSWR from 'swr'
import { fetcher } from './fetcher'
import { useCatsStore } from '../store/catsStore'

export const getAllCats = () => {
  const { data: cats } = useSWR(`${import.meta.env.VITE_API_ENDPOINT}/breeds?api_key=${import.meta.env.VITE_API_KEY}`, fetcher)
  const catInfos = useCatsStore((state) => state.setCats(cats))
  return catInfos
}