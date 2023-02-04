import { envsafe, str } from 'envsafe';

export const env = envsafe({
  API_URL: str(),
});
