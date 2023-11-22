import { JobHistory } from '../components/JobHistory';
import { render, screen } from '../test-utils';

describe('JobHistory component', () => {
    test('Renders specific words in job history details', () => {
        render(<JobHistory />);

        const wordsToCheck = ['software developer', 'java', 'kubernetes', 'Otto'];

        let isWordPresent = false;

        wordsToCheck.forEach((word) => {
            const elementsWithWord = screen.getAllByText(word, { exact: false });
            if (elementsWithWord.length > 0) {
                isWordPresent = true;
            }
            expect(isWordPresent).toBe(true);
        });
    });
});
