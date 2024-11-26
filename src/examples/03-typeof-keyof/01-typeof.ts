const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
} as const;

type Config = typeof config;

const myConfig: Config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
};

// @ts-expect-error
myConfig.apiUrl = 'https://evil.com';
