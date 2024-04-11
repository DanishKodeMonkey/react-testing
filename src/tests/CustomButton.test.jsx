/* eslint-disable no-undef */

import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CustomButton from '../CustomButton';

// mocking tests

describe('CustomButton component', () => {
    /* 
    it is possible to set up mocks here, in a beforeEach block, this results
    in worse readability however, so the recommended approach is to make mocks
    in each test block as needed.
     */
    it('should render a button with the text "Click me too!"', () => {
        // to test the render of the button, make a render and test if it exist.
        render(<CustomButton onClick={() => {}} />);

        const button = screen.getByRole('button', { name: 'Click me too!' });
        expect(button).toBeInTheDocument();
    });

    it('should call the onClick function when clicked', async () => {
        // to test of a button is clicked (callback) we use Mocks
        // much the function call using vitetest.fn()
        const onClick = vi.fn();

        // initialize a simulated user
        const user = userEvent.setup();

        // render the button to be clicked
        render(<CustomButton onClick={onClick} />);

        // query the rendered button, and assign to variable
        const button = screen.getByRole('button', { name: 'Click me too!' });

        // Have the simulated user click the button
        await user.click(button);

        // check if the mocked onClick function was called
        expect(onClick).toHaveBeenCalled();
    });

    it("Should not call the onClick function when it isn't clicked", () => {
        // this one is pretty self explanatory based on the above.
        const onClick = vi.fn();

        render(<CustomButton onClick={onClick} />);

        expect(onClick).not.toHaveBeenCalled();
    });
});
