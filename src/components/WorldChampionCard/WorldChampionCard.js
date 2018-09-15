import React, { Component } from 'react';
import './WorldChampionCard.scss';
import PropTypes from 'prop-types';
import httpClient from '../../services/http/http-client/http-client';

class WorldChampionCard extends Component {
  componentDidMount() {
    const { season } = this.props;
    httpClient.getCall(`/${season}/driverStandings/1.json`).then((res) => {
      console.log(res.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0]);
    });
  }

  render() {
    return (
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 my-2">
        <div className="card">
          <div className="card-header">
            asdfasd
          </div>
          <div className="card-body">
            dasfasdf
          </div>
        </div>
      </div>
    );
  }
}

WorldChampionCard.propTypes = {
  season: PropTypes.number.isRequired,
};

export default WorldChampionCard;
