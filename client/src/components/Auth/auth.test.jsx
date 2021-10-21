import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { MemoryRouter, Route } from 'react-router-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from '@testing-library/react';
import axios from 'axios';
import userEvent from '@testing-library/user-event';

import Signup from './Signup';
import App from '../../App';
import NavBar from '../NavBar/NavBar';

Enzyme.configure({ adapter: new Adapter() });

const user = {
  firstName: 'first',
  lastaName: 'last',
  email: 'test@test.com',
  role: 'seeker',
};
const theme = {
  color: {
    black: '#14080E',
    purple: '#49475B',
    teal: '#799496',
    green: '#ACC196',
    yellow: '#E9EB9E',
    white: '#FFFFFF',
  },
  fontFamily: 'Sans-serif',
  fontSize: {
    text: '12px',
    button: '16px',
    large: '18px',
  },
};
jest.mock('axios');
describe('Signup page', () => {
  it('should be able to create an account', async () => {
    await render(<Signup />);
    // const signup = await screen.getByTestId('signup');
    // await fireEvent.click(signup);
    await userEvent.type(screen.getByTestId('first'), 'first');
    await userEvent.type(screen.getByTestId('last'), 'last');
    await userEvent.type(screen.getByTestId('email'), 'test@test.com');
    await userEvent.type(screen.getByTestId('password'), '123');
    const button = await screen.getByTestId('create');
    expect(screen.getByTestId('email')).toHaveValue('test@test.com');
    expect(screen.queryByText('Welcome to JobSite')).toBeInTheDocument();
    await userEvent.click(button);
  });
  it('should not have tilte Welcome to JobSite', () => {
    expect(screen.queryByText('Welcome to JobSite')).not.toBeInTheDocument();
  });
});

describe('<Signup />', () => {
  const wrapper = shallow(<Signup />);
  it('should render the value of authorized', () => {
    wrapper.find('input[type="submit"]').simulate('click');
    expect(wrapper.state('authorized')).toEqual('true');
  });
});
