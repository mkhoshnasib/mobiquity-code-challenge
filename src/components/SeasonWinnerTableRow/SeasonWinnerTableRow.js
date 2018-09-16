import React, { Component } from 'react';
import './SeasonWinnerTableRow.scss';
import PropTypes from 'prop-types';

class SeasonWinnerTableRow extends Component {
  render() {
    const { winner } = this.props;
    return (
      <tr className={winner.isDriverWorldChampion ? 'bg-primary' : ''}>
        <th scope="row">{winner.round}</th>
        <td>{winner.raceName}</td>
        <td>{winner.circuitName}</td>
        <td>{`${winner.driver.givenName} ${winner.driver.familyName}`}</td>
        <td>{winner.constructor.name}</td>
      </tr>
    );
  }
}

SeasonWinnerTableRow.propTypes = {
  winner: PropTypes.object.isRequired,
};

export default SeasonWinnerTableRow;
