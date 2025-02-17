import extractErrorMessage from '@/error-handling/utils';
import { useToast } from '@/hooks/use-toast';

export default function useErrorHandler<
  Params extends any[],
  ReturnType extends Promise<any>,
>(fn: (...params: Params) => ReturnType) {
  const { toast } = useToast();

  return async (...args: Params) => {
    try {
      return await fn(...args);
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Щось пішло нет так :(',
        description: extractErrorMessage(error as Error),
      });
    }
  };
}
