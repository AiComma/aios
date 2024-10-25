import antfu from '@antfu/eslint-config'
import tailwind from 'eslint-plugin-tailwindcss'

export default antfu(
  {
    formatters: true,
    react: true,
    ignores: ['**/components/ui/**/*.tsx'],
  },
  ...tailwind.configs['flat/recommended'],
)
