export const useBaseFecth = async <T>(url:string, option?: {}) => {
  const {public:pub } = useRuntimeConfig()
  const data: Ref<T | null> = ref(null);
  const error: Ref<Error | null> = ref(null);
  const isLoading: Ref<boolean> = ref(false);
  const { base_url } = pub
  console.log('ic')
  const uri = base_url + url
  const request = await useFetch<T>(()=> uri ,option)
  return request;
}
