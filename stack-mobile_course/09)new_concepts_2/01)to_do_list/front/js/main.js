
import {authRegister, authLogin} from './auth/auth.js'
import {moveAuthScreen} from './utils/form.js'
import {descriptionButtonsActions} from './tasks/tasks.js'

// auth screen
authRegister()
authLogin()
moveAuthScreen()
descriptionButtonsActions()
