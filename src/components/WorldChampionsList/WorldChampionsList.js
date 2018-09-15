import React, { Component } from 'react';
import './WorldChampionsList.scss';
import WorldChampionCard from '../WorldChampionCard/WorldChampionCard';

class WorldChampionsList extends Component {
  render() {
    return (
      <div className="row mx-2 mt-3">
        <WorldChampionCard season={2005} />
        <WorldChampionCard season={2006} />
        <WorldChampionCard season={2007} />
        <WorldChampionCard season={2008} />
        <WorldChampionCard season={2009} />
        <WorldChampionCard season={2010} />
        <WorldChampionCard season={2011} />
        <WorldChampionCard season={2012} />
      </div>
    );
  }
}

export default WorldChampionsList;
