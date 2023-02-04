import $api from '@/api/$api';
import { env } from '@/const/env';
import aspidaFetch from '@aspida/fetch';

export const api = $api(aspidaFetch(fetch, { baseURL: env.NEXT_PUBLIC_API_URL }));
