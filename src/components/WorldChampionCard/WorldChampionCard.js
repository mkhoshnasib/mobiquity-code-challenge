import React, { Component } from 'react';
import './WorldChampionCard.scss';
import PropTypes from 'prop-types';

class WorldChampionCard extends Component {
  render() {
    const { champion } = this.props;
    return (
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 my-2">
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
  champion: PropTypes.object.isRequired,
};

export default WorldChampionCard;
