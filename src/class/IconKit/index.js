import { Icon } from 'react-icons-kit'
import { user, shoppingCart, gear, edit, signOut, home } from 'react-icons-kit/fa/'

class Iconkit {
    getIconComponent() {
        return Icon
    }

    getIconFontAwesome() {
        return {
            user,
            shoppingCart,
            gear,
            edit,
            signOut,
            home
        }
    }
}

export default new Iconkit;