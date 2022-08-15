import _ from 'lodash'
import "./App.css"

const App = ({name}) => {
    return `<h2>${_.join(["Hello,", name], '')}</h2>`
}

export default App