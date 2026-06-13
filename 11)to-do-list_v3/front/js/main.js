
import {authRegister, authLogin} from './auth/auth.js'
import {moveAuthScreen} from './utils/form.js'
import {descriptionButtonsActions} from './tasks/tasksActions.js'

// tudo chamado é para definir eventos

// auth screen
authRegister()
authLogin()
moveAuthScreen()

// descrption screen
descriptionButtonsActions()
