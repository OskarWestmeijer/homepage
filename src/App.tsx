import '@mantine/core/styles.css';
import { Space } from '@mantine/core';
import './App.css';
import { Introduction } from './components/Introduction';
import { JobHistory } from './components/JobHistory';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme.tsx';

function App() {
    return (
        <>
            <MantineProvider theme={theme}>
                <Space h={50} />
                <Introduction />
                <Space h={100} />
                <JobHistory />
                <Space h={100} />
                <Projects />
                <Space h={100} />
                <Footer />
            </MantineProvider>
        </>
    );
}

export default App;
