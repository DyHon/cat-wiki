import axios from 'axios';

// Define my query
export const catPageQuery = (breedId) => ({
  queryKey: ['catInfo'],
  queryFn: async () => 
    await axios
      .get(`${import.meta.env.VITE_API_ENDPOINT}/images/search?breed_ids=${breedId}&limit=9&api_key=${import.meta.env.VITE_API_KEY}`)
      .then(res => res.data),
  refetchOnMount: "always",
  refetchOnWindowFocus: false
})
