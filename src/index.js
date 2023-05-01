import { createRoot } from 'react-dom/client';

import { App } from './App';

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

root.render(<App />);