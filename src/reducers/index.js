import { combineReducers } from 'redux'
import visibilityFilter from './visibility-filter'
import searchQuery from './search-query'
import categories from './categories'
import tasks from './tasks'
import user from './user'

export default combineReducers({
    visibilityFilter,
    searchQuery,
    tasks,
    categories,
    user
})
