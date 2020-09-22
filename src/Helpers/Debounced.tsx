// Imports
import { autoCompleteSearch } from '../Store/actions/AutoCompleteAction'
import store from "../Store/Store"
import * as _ from 'lodash'


// func - for the autocomplete search
export const debounced = _.debounce((query) => {
    return store.dispatch(autoCompleteSearch(query))
}, 200)