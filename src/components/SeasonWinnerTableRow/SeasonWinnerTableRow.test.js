import React from 'react';
import ReactDOM from 'react-dom';
import SeasonWinnerTableRow from './SeasonWinnerTableRow';

it('SeasonWinnerTableRow renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SeasonWinnerTableRow />, div);
  ReactDOM.unmountComponentAtNode(div);
});
