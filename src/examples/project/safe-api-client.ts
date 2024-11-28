/**
 * Zadanie: Klient API z type-safety
 * Cel: Stworzenie klienta API, który dynamicznie generuje metody
 * na podstawie podanej specyfikacji API.
 *
 * Klient powinien obsługiwać zapytania GET i POST, zapewniając jednocześnie bezpieczeństwo
 * typów dla parametrów żądania (Request) i typów odpowiedzi (Response).
 *
 * Wymagania:
 * 1. Specyfikacja API: Zdefiniuj typ, który reprezentuje endpointy końcowe API, w tym parametry request i typy response.
 * 2. Generowanie Typów: Użyj Utility Types do wnioskowania typów ze specyfikacji API.
 * 3. Dynamiczne Generowanie Metod: Stwórz klasę, która generuje metody dla każdego endpointu zdefiniowanego w specyfikacji API.
 * 4. Type-safety: Upewnij się, że generowane metody gwarantują type-safety - powinny wymuszać poprawne typy dla parametrów requestu i zwracać odpowiednie typy odpowiedzi.
 * 5. Obsługa Błędów: Zaimplementuj podstawową obsługę błędów
 * 6. Use case: Wykorzystaj klienta API z przykladowym adresem np. https://api.example.com i specyfikacją API.
 */
import axios, { AxiosError } from 'axios';
import { title } from 'process';
import { z, ZodError } from 'zod';

interface ApiSpec {
  getUser: {
    request: { id: number };
    response: { name: string; age: number };
  };
  createUser: {
    request: { name: string; age: number };
    response: { id: number };
  };
}

// 1. validator
const productSchema = z.object({
  id: z.number().positive(),
  name: z.string().min(3, { message: 'Name is required' }),
  description: z.string(),
});

// 2. type
type ProductDto = z.infer<typeof productSchema>;

type HttpMethod = 'GET' | 'POST';
type RequestParams<T extends keyof ApiSpec> = ApiSpec[T]['request'];
type ResponseType<T extends keyof ApiSpec> = ApiSpec[T]['response'];

class ApiClient {
  constructor(private baseUrl: string) {}

  async request<K extends keyof ApiSpec>(
    method: HttpMethod,
    endpoint: K,
    params?: RequestParams<K>,
  ) {
    console.log('Wykonywanie requestu');

    // try {
    //   const response = await fetch('https://example.com');
    //   const data: ResponseType<K> = await response.json(); // any

    //   return data;
    //   // return data as Promise<ResponseType<K>>;
    // } catch (error) {}

    try {
      const response = await axios.get<ResponseType<K>>('https//example.com');

      const data = productSchema.parse(response.data); // validator type | Error

      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        // request error
      } else if (error instanceof ZodError) {
        // zod validation error
      }
      // else
    }

    // return Promise.resolve({}) as Promise<ResponseType<K>>; //
  }
}

// usage:
const client = new ApiClient('https://example.com');
const response = client.request('GET', 'getUser', { id: 567 });
// const response = client.request('GET', 'createUser', {
//   age: 123,
//   name: 'barbara',
// });
