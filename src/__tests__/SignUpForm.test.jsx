import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import SignUpForm from "../Sections/SignUpForm";
import useAuth from "../Hooks/useAuth";

jest.mock("../Hooks/useAuth");

describe("SignUpForm", () => {
    beforeEach(() => {
        useAuth.mockReturnValue({
            signUpUser: jest.fn(),
            profileUpdate: jest.fn(),
        });
    });

    it("renders the sign-up form correctly", () => {
        const { getByText, getByPlaceholderText } = render(<SignUpForm />);

        expect(getByText("Sign Up")).toBeInTheDocument();
        expect(getByPlaceholderText("Enter full name")).toBeInTheDocument();
        expect(getByPlaceholderText("Enter your email")).toBeInTheDocument();
        expect(getByPlaceholderText("Password")).toBeInTheDocument();
        expect(getByPlaceholderText("Confirm password")).toBeInTheDocument();
        expect(getByText("Sign Up")).toBeInTheDocument();
    });

    it("displays an error message if the password is too short", async () => {
        const { getByText, getByPlaceholderText } = render(<SignUpForm />);
        const passwordInput = getByPlaceholderText("Password");

        fireEvent.change(passwordInput, { target: { value: "short" } });
        fireEvent.submit(passwordInput);

        await waitFor(() => {
            expect(getByText("password should be 6 characters")).toBeInTheDocument();
        });
    });

    it("displays an error message if the passwords do not match", async () => {
        const { getByText, getByPlaceholderText } = render(<SignUpForm />);
        const passwordInput = getByPlaceholderText("Password");
        const confirmPasswordInput = getByPlaceholderText("Confirm password");

        fireEvent.change(passwordInput, { target: { value: "password123" } });
        fireEvent.change(confirmPasswordInput, { target: { value: "password456" } });
        fireEvent.submit(passwordInput);

        await waitFor(() => {
            expect(getByText("password didn't match")).toBeInTheDocument();
        });
    });

    // You can write more tests for form submission and success scenarios here
});