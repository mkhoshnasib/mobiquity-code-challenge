import React, { Component } from 'react';
import './SeasonWinnersList.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SeasonWinnerTableRow from '../SeasonWinnerTableRow/SeasonWinnerTableRow';

class SeasonWinnersList extends Component {
  render() {
    const { winners } = this.props;
    return (
      <div className="row px-2 pt-3">
        {winners.length ? (
          <div className="col-12 p-3 bg-dark">
            <h1 className="text-warning text-center my-3">
              <strong>
                {`WINNERS OF EVERY RACE IN ${winners[0].season}`}
              </strong>
            </h1>
            <table className="table table-dark bg-transparent">
              <thead>
                <tr>
                  <th scope="col">Round</th>
                  <th scope="col">Race Name</th>
                  <th scope="col">Circuit Name</th>
                  <th scope="col">Driver</th>
                  <th scope="col">Constructor</th>
                </tr>
              </thead>
              <tbody>
                {winners.map(x => (<SeasonWinnerTableRow key={x.round} winner={x} />))}
              </tbody>
            </table>
          </div>
        ) : ''
        }
      </div>
    );
  }
}

SeasonWinnersList.propTypes = {
  winners: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  winners: state.winners.items,
});

export default connect(mapStateToProps)(SeasonWinnersList);
