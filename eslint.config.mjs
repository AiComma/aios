import antfu from '@antfu/eslint-config'
import next from '@next/eslint-plugin-next'
import tailwind from 'eslint-plugin-tailwindcss'

export default antfu(
  {
    formatters: true,
    react: true,
    ignores: ['**/components/ui/**/*.tsx'],
    plugins: {
      next,
    },
  },
  ...tailwind.configs['flat/recommended'],
)
