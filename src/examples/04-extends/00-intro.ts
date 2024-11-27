interface Config {
  host?: string;
  port?: number;
  path?: string;
}

type MyHostConfig<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
// type MyHostConfig<T, K extends keyof T> = Required<Pick<T, K>>
type MyRequiredHost = MyHostConfig<Config, 'host'>;
const myRequiredConfig: MyRequiredHost = {
  host: 'http://evil.com',
};
