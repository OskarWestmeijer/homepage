import { Footer } from '../components/Footer';
import { render } from '../test-utils';

test('demo', () => {
    expect(true).toBe(true);
});

describe('Welcome component', () => {
    test('Renders the main page', () => {
        render(<Footer />);
        expect(true).toBeTruthy();
    });
});
