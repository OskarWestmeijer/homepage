import './App.css';
import { Introduction } from './components/introduction/Introduction';

import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

function App() {
    return (
        <>
            <MantineProvider>{<Introduction />}</MantineProvider>
        </>
    );
}

export default App;
