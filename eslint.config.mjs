import config from '@rocketseat/eslint-config/react.mjs'

export default [
  ...config,
  {
    rules: {
    ...config.rules,
    "react/self-closing-comp": ["error", {
    "component": true,
    "html": false
    }],
    '@stylistic/js/max-len': 
    ['warn', { 
      code: 80,
      tabWidth: 2,
      ignoreComments: true, 
      ignoreStrings: true,
      ignoreUrls: true 
    }],
  }
}
]


