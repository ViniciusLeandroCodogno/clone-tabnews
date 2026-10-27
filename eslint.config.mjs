import nextVitals from "eslint-config-next/core-web-vitals";
import jest from "eslint-plugin-jest";
import prettier from "eslint-config-prettier";

const config = [
  ...nextVitals,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ...jest.configs["flat/recommended"],
    rules: {
      "no-undef": "error",
      "no-unused-vars": "error",
    },
  },
  prettier,
];

export default config;
