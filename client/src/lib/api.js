export async function apiRequest(method, url, data) {
  const response = await fetch(url, {
    method,
    headers: data ? { 'Content-Type': 'application/json' } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: 'include',
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`${response.status}: ${text || response.statusText}`);
  }

  return response.json();
}

export const apiGet = (url) => apiRequest('GET', url);
export const apiPost = (url, data) => apiRequest('POST', url, data);
export const apiPut = (url, data) => apiRequest('PUT', url, data);
export const apiDelete = (url) => apiRequest('DELETE', url);
