import { config } from 'dotenv';

const DEFAULT_CONFIG = {
  PORT: 3978
};

config();

console.log(process.env);

export default function () {
  const nextEnv: any = {
    ...DEFAULT_CONFIG,
    ...process.env
  };

  process.env = {
    PUBLIC_URL: `http://localhost:${ nextEnv.PORT }/public/`,
    ...nextEnv
  };
}
