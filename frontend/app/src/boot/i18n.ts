import { boot } from 'quasar/wrappers'
import { createI18n } from 'vue-i18n'

import ptBr from 'src/i18n/messages/pt-br'

export default boot(({ app }) => {
  const i18n = createI18n({
    locale: 'pt-br',
    fallbackLocale: 'pt-br',
    messages: {
      'pt-br': ptBr
    }
  })

  // Set i18n instance on app
  app.use(i18n)
})
