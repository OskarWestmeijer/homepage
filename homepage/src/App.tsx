import { Space, Grid } from '@mantine/core';
import './App.css';
import { Introduction } from './components/Introduction';
import { JobHistory } from './components/JobHistory';
import { Projects } from './components/Projects';

import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

function App() {
    return (
        <>
            <MantineProvider>
                <Space h={50} />
                <Introduction />
                <Space h={100} />
                <JobHistory />
                <Space h={100} />
                <Projects />
            </MantineProvider>
        </>
    );
}

export default App;
