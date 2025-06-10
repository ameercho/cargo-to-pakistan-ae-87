
import { useState, useCallback } from 'react';

interface LoadingState {
  isLoading: boolean;
  error: string | null;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  clearError: () => void;
  withLoading: <T>(asyncFn: () => Promise<T>) => Promise<T>;
}

export const useLoadingState = (initialLoading = false): LoadingState => {
  const [isLoading, setIsLoading] = useState(initialLoading);
  const [error, setError] = useState<string | null>(null);

  const setLoading = useCallback((loading: boolean) => {
    setIsLoading(loading);
    if (loading) setError(null);
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const withLoading = useCallback(async <T>(asyncFn: () => Promise<T>): Promise<T> => {
    setLoading(true);
    try {
      const result = await asyncFn();
      setLoading(false);
      return result;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setLoading(false);
      throw err;
    }
  }, [setLoading]);

  return {
    isLoading,
    error,
    setLoading,
    setError,
    clearError,
    withLoading
  };
};
