import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/store';
import CryptoData from '../../components/cryptodata';

describe('Testing CryptoData component', () => {
  it('should fetch data from API on load', async () => {
    const data = {
      success: true,
      terms: 'https://coinlayer.com/terms',
      privacy: 'https://coinlayer.com/privacy',
      timestamp: 1679069885,
      target: 'GHS',
      rates: {
        BTC: {
          rate: 328452.955617,
          high: 371697.835357,
          low: 306253.257198,
          vol: 1337293721.603728,
          cap: 6344216641572.383,
          sup: 19315450,
          change: 18435.57485600002,
          change_pct: 5.946626221648025,
        },
      },
    };
    // Arrange
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({ json: () => Promise.resolve(data) }));
    let asFragment;
    // Act
    await act(() => {
      const component = render(
        <BrowserRouter>
          <Provider store={store}>
            <CryptoData />
          </Provider>
          ,
        </BrowserRouter>,
      );
      asFragment = component.asFragment;
    });
    // await screen.findByText('1BTC');
    // Assert
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText('1BTC =')).toBeInTheDocument();
  });
});
