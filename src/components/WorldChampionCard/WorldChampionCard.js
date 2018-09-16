import React, { Component } from 'react';
import './WorldChampionCard.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchWinners } from '../../services/redux/actions/winnersActions';

class WorldChampionCard extends Component {
  fetchWinners(season, worldChampionId) {
    this.props.fetchWinners(season, worldChampionId);
  }

  render() {
    const { champion } = this.props;
    return (
      <div
        className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 my-2"
        onClick={() => this.fetchWinners(champion.season, champion.driver.driverId)}
      >
        <div className="card text-center champion-card">
          <div className="card-header text-danger">
            <h4 className="mt-2"><strong>{champion.season}</strong></h4>
          </div>
          <div className="card-body pt-0">
            <p>{`${champion.driver.givenName} ${champion.driver.familyName}`}</p>
            <p className="text-primary">{champion.constructor.name}</p>
          </div>
        </div>
      </div>
    );
  }
}

WorldChampionCard.propTypes = {
  fetchWinners: PropTypes.func.isRequired,
  champion: PropTypes.object.isRequired,
};

export default connect(null, { fetchWinners })(WorldChampionCard);
