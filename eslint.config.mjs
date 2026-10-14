import nextVitals from "eslint-config-next/core-web-vitals";
import jest from "eslint-plugin-jest";
import prettier from "eslint-config-prettier";

const config = [
  ...nextVitals,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ...jest.configs["flat/recommended"],
  },
  prettier,
];

export default config;
