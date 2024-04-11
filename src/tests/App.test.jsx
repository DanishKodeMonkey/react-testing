/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';

describe('App component', () => {
    it('renders danish Kode Monkey', () => {
        // destructure render to obtain a container for the test
        const { container } = render(<App />);

        // test against snapshot of expected render, a HTML representation of the App component
        expect(container).toMatchSnapshot();
    });

    // note the asynchronous function
    it('renders Ravenous Ravens after button click', async () => {
        // Create a instance of a user event, this will simulate a user interaction
        const user = userEvent.setup();

        // render an instance of the component
        render(<App />);

        // fetch the button element of the component
        const button = screen.getByRole('button', { name: 'Click me' });

        // await a effect to finish from user.click method on button
        await user.click(button);

        // expected result from click, heading textContent should match Ravenous Ravens regex
        expect(screen.getByRole('heading').textContent).toMatch(
            /Ravenous Ravens/i
        );
    });
});
