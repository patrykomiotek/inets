// implement function useApi (UI) which will return data from API
// it should provide { data, isError, isLoading } information
// provide tape safety for this function
// const { data, isError, isLoading } = useApi<Users[]>('https://example.com/v1/users')
// const { data, isError, isLoading } = useApi<Products[]>('https://example.com/v1/products')
// const { data, isError, isLoading } = useApi<Products>('https://example.com/v1/products/543')

// type ApiReturnedType<T> =
//   | { data: T; isError: false; isLoading: boolean }
//   | {
//       data: null;
//       isError: true;
//       isLoading: boolean;
//     };

// discriminated unions
// generic type
type ApiReturnedType<T> =
  // pending
  | { data: undefined; isError: false; isLoading: true }
  // fulfilled
  | { data: T; isError: false; isLoading: false }
  // rejected
  | { data: undefined; isError: true; isLoading: false };

// async function useApi<T>(url: string): Promise<ApiReturnedType<T>> {
async function useApi<T>(url: string) {
  let result: ApiReturnedType<T> = {
    data: undefined,
    isError: false,
    isLoading: true,
  };
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('Error');
    }
    result = {
      data: (await res.json()) as T,
      isError: false,
      isLoading: false,
    };
  } catch (error) {
    result = {
      data: undefined,
      isError: true,
      isLoading: false,
    };
  } finally {
    result.isLoading = false;
  }

  return result;
}

type User = {
  id: number;
  name: string;
};

const Component = async () => {
  const { data, isError, isLoading } = await useApi<User[]>(
    'https://example.com/v1/users',
  );

  if (isLoading) {
    return 'Loading...';
  } else if (isError) {
    return 'Error...';
  } else {
    data; // T
  }
};

type Products = {
  id: number;
  name: string;
  price: number;
};

type ResolvedUser = Awaited<Promise<User>>;

// const { data, isError, isLoading } = await useApi<Products[]>('https://example.com/v1/products')
// const { data, isError, isLoading } = await useApi<Products>('https://example.com/v1/products/543')

// console.log(data, isError, isLoading);

// 1
// type ApiReturnedType<T> =
//   | { data: T; isError: false; isLoading: boolean }
//   | {
//       data: null;
//       isError: true;
//       isLoading: boolean;
//     };

// async function useApi<T>(url: string): Promise<ApiReturnedType<T>> {
//   let result: ApiReturnedType<T> = {
//     data: null,
//     isError: true,
//     isLoading: true,
//   };
//   try {
//     const res = await fetch(url);
//     if (!res.ok) {
//       throw new Error('Error');
//     }
//     result = {
//       data: (await res.json()) as T,
//       isError: false,
//       isLoading: false,
//     };
//   } catch (error) {
//     result.isError = true;
//   } finally {
//     result.isLoading = false;
//   }

//   return result;
// }

// type User = {
//   id: number;
//   name: string;
// };

// const { data, isError, isLoading } = await useApi<User[]>(
//   'https://example.com/v1/users',
// );

// type Products = {
//   id: number;
//   name: string;
//   price: number;
// };

// // const { data, isError, isLoading } = await useApi<Products[]>('https://example.com/v1/products')
// // const { data, isError, isLoading } = await useApi<Products>('https://example.com/v1/products/543')

// console.log(data, isError, isLoading);

// 2
// interface UseApiProps<T> {
//   data: T;
//   isError: boolean;
//   isLoading: boolean;
// }

// const useApi = async <T>(url: string): Promise<UseApiProps<T>> => {
//   let data = null;
//   let isError = false;
//   let isLoading = true;

//   try {
//     const response = await fetch(url);
//     data = await response.json();
//   } catch {
//     isError = true;
//   } finally {
//     isLoading = false;
//   }
//   return { data, isError, isLoading };
// };

// const { data, isError, isLoading } = await useApi<Users[]>('https://example.com/v1/users');
// const { data, isError, isLoading } = await useApi<Products[]>('https://example.com/v1/products');
// const { data, isError, isLoading } = await useApi<Products>('https://example.com/v1/products/543');
