export interface ApiServiceInterface {
  useAuthentication(accessToken: string): ApiServiceInterface;
  post<T>(path: string, data: any): Promise<T>;
  get<T>(path: string): Promise<T>;
  put<T>(path: string, data: any): Promise<T>;
  patch<T>(path: string, data: any): Promise<T>;
  delete<T>(path: string): Promise<T>;
}
