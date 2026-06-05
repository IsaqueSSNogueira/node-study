
import {authRegister, authLogin} from './auth/auth.js'
import {moveAuthScreen} from './utils/form.js'
import {descriptionButtonsActions} from './tasks/tasksActions.js'

// auth screen
authRegister()
authLogin()
moveAuthScreen()
descriptionButtonsActions()
