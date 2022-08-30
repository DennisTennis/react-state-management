import { BrowserRouter } from "react-router-dom"
import { createRoot } from 'react-dom/client';
import App from './App'

if (process.env.NODE_ENV === 'development') {
    const server = require('./server.js')
    server.default()
}


const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<BrowserRouter><App /></BrowserRouter>
);

// ReactDOM.render(
//     <React.StrictMode>
//             <App />    
//     </React.StrictMode>,
//     document.getElementById('root')
// )
