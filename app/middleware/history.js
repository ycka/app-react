import { useRouterHistory } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

// export default useRouterHistory(createBrowserHistory)()
const history = useRouterHistory(createBrowserHistory)({})
export default history
