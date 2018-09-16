import React from 'react';
import * as ReactDOM from 'react-dom';
import SeasonWinners from './SeasonWinnersList';

it('SeasonWinners renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SeasonWinners />, div);
  ReactDOM.unmountComponentAtNode(div);
});
