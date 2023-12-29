export const useBaseFecth = async <T>(url: string, option?: {}) => {
  const { public: pub } = useRuntimeConfig()
  const data: Ref<T | null> = ref(null);
  const error: Ref<Error | null> = ref(null);
  const isLoading: Ref<boolean> = ref(false);
  const { base_url } = pub

  const uri = base_url + url
  const request = await useFetch<T>(() => uri, option)
  try {

    return request;
  }catch(e){
    return;
  }
  
}
