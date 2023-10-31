import { Space } from '@mantine/core';
import './App.css';
import { Introduction } from './components/Introduction';
import { JobHistory } from './components/JobHistory';

import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

function App() {
    return (
        <>
            <MantineProvider>
                <Space h="md" />
                <Introduction />
                <Space h="xl" />
                <Space h="xl" />
                <JobHistory />
            </MantineProvider>
        </>
    );
}

export default App;
