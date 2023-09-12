import TestRenderer from 'react-test-renderer';
import { MemoryRouter } from "react-router";
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query';
import Navbar from "../Shared/Navbar";
import AuthProvider from "../Providers/AuthProvider";
const queryClient = new QueryClient();

describe('Navbar.jsx', () => {
    it("renders correctly", () => {
        const tree = TestRenderer.create(
            <MemoryRouter>
                <QueryClientProvider client={queryClient}>
                    <AuthProvider>
                        <Navbar />
                    </AuthProvider>
                </QueryClientProvider>
            </MemoryRouter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders the logo", () => {
        const component = TestRenderer.create(
            <MemoryRouter>
                <QueryClientProvider client={queryClient}>
                    <AuthProvider>
                        <Navbar />
                    </AuthProvider>
                </QueryClientProvider>
            </MemoryRouter>
        );
        const logo = component.root.findByProps({
            "data-testid": "logo",
        });
        expect(logo.props.alt).toBe("hire wave logo");
    });

    it("renders navigation items", () => {
        const component = TestRenderer.create(
            <MemoryRouter>
                <QueryClientProvider client={queryClient}>
                    <AuthProvider>
                        <Navbar />
                    </AuthProvider>
                </QueryClientProvider>
            </MemoryRouter>
        );
        const navItems = component.root.findAllByType("li");
        expect(navItems.length).toBe(10);
    });

    it("renders the toggle button", () => {
        const component = TestRenderer.create(
            <MemoryRouter>
                <QueryClientProvider client={queryClient}>
                    <AuthProvider>
                        <Navbar />
                    </AuthProvider>
                </QueryClientProvider>
            </MemoryRouter>
        );
        const toggleButton = component.root.findByProps({ "data-testid": "toggle__button" });
        expect(toggleButton.props.onClick).toBeDefined();
    });
});