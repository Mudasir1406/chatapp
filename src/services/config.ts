export const BASE_URL_CHATAPP_API = 'https://backend.ratehr.com';

export type configDataType = {
  token?: string;
  contentType?: 'application/json' | 'multipart/form-data';
};

export const REQUEST_CONFIG = (configData: configDataType) => ({
  headers: {
    Authorization: configData.token ? `Bearer ${configData.token || ''}` : '',
    'Content-Type': configData.contentType || 'application/json',
  },
});
