import { api } from '@/api/axios';

export default async function getValues<T>(route: string, id?: string, filterQueryKey?: string, filterQueryValue?: string, pageQueryKey?: string, pageQueryValue?: number): Promise<T> {
  const filterQueryParams = (filterQueryKey || filterQueryValue) ? `${filterQueryKey}=${filterQueryValue}` : '';
  const pageQueryParams = (pageQueryKey || pageQueryValue) ? `${pageQueryKey}=${pageQueryValue}` : '';
  const itemId = id ? `/${id}` : '';

  try {
    const response = await api.get(`/${route}${itemId}${filterQueryParams}${pageQueryParams}`);

    console.log('response', response);

    return response.data.data as any;
  } catch (error: any) {
    console.log('error', error);
  }

  return {} as T;
}