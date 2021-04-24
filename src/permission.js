import router from './router/index'
import { domTitle, setDocumentTitle } from './utils/domUtil'

router.beforeEach((to, from, next) => {
  // eslint-disable-next-line no-unused-expressions
  to.meta &&
    typeof to.meta.title !== 'undefined' &&
    setDocumentTitle(`${to.meta.title} - ${domTitle}`)
  next()
})
