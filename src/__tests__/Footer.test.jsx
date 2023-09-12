import TestRenderer from 'react-test-renderer';
import { MemoryRouter } from "react-router";
import Footer from "../Shared/Footer";

describe('Footer.jsx', () => {
    it('test the children inside the footer component', () => {
        const footer = TestRenderer.create(<MemoryRouter><Footer /></MemoryRouter>).toJSON()
        expect(footer).toMatchSnapshot();
    })

    it("renders the logo", () => {
        const component = TestRenderer.create(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );
        const logo = component.root.findByType("img");
        expect(logo.props.alt).toBe("hire wave logo");
    });

    it("renders social media links", () => {
        const component = TestRenderer.create(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );
        const socialLinks = component.root.findAllByType("a");
        expect(socialLinks).toHaveLength(27);
    });

    it("renders candidate links", () => {
        const component = TestRenderer.create(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );

        // Use a data-testid to uniquely identify the link.
        const candidateLink = component.root.findByProps({
            "data-testid": "candidate-link",
        });

        expect(candidateLink.props.children).toBe("Browse Jobs");
    });
})