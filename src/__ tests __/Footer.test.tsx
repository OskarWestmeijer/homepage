import { Footer } from '../components/Footer';
import { render, screen } from '../test-utils';

describe('Footer component', () => {
    const currentYear = new Date().getFullYear().toString();

    test('Renders author name and current year', () => {
        render(<Footer />);
        const authorAndYearElement = screen.getByText(new RegExp(`Oskar Westmeijer • ${currentYear}`, 'i'));
        expect(authorAndYearElement).toBeInTheDocument();
    });
});
