import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import CryptoData from '../../components/cryptodata';
import { BrowserRouter } from 'react-router-dom';

describe('Testing CryptoData component', () => {
  it('should fetch data from API on load', async () => {
    const data2 = {
        "success": true,
        "terms": "https://coinlayer.com/terms",
        "privacy": "https://coinlayer.com/privacy",
        "timestamp": 1679069885,
        "target": "GHS",
        "rates": {
          "BTC": {
            "rate": 328452.955617,
            "high": 371697.835357,
            "low": 306253.257198,
            "vol": 1337293721.603728,
            "cap": 6344216641572.383,
            "sup": 19315450,
            "change": 18435.57485600002,
            "change_pct": 5.946626221648025
          }
        }
    }
    const data = {
      id: 'BTC',
      name: 'BTC',
      rate: '2000',
      high: '2000',
      low: '2000',
      vol: '2000',
      cap: '2000',
      sup: '2000',
      change: '2000',
      change_pct: '2000',
    };
    // Arrange
    jest.spyOn(global, "fetch").mockImplementation(() => Promise.resolve({ json: () => Promise.resolve(data2) })  );
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
    //await screen.findByText('1BTC');
    // Assert
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText('1BTC =')).toBeInTheDocument();
  });

  /* test('Snapshot testing', () => {
    const myRenderer = renderer.create(
      <Provider store={store}>
        <Router>
          <App />
        </Router>

      </Provider>,
    );
    const testComponent = myRenderer.toJSON();
    expect(testComponent).toMatchSnapshot();
  }); */
});
