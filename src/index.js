import React from 'react';
import ReactDOM from 'react-dom';
import reducer, { initialState } from "./reducer"
import { StateProvider} from "./StateProvider"

//import * as serviceWorker from './serviceWorker';
import App from './components/App';
import Firebase, { FirebaseContext } from './components/Firebase';
ReactDOM.render(
<FirebaseContext.Provider value={new Firebase()}>
<StateProvider initialState={initialState} reducer={reducer}>
<App />
</StateProvider>
</FirebaseContext.Provider>,
document.getElementById('root'),
);
//serviceWorker.unregister();