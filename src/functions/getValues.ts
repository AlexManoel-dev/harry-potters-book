import { api } from '@/api/axios';

export default async function getValues<T>(route: string, id?: string, queryKey?: string, queryValue?: string): Promise<T> {
  const queryParams = (queryKey || queryValue) ? `${queryKey}=${queryValue}` : '';
  const itemId = id ? `/${id}` : '';

  try {
    const response = await api.get(`/${route}${itemId}${queryParams}`);

    console.log('response', response);

    return response.data.data as any;
  } catch (error: any) {
    console.log('error', error);
  }

  return {} as T;
}