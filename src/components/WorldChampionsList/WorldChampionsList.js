import React, { Component } from 'react';
import './WorldChampionsList.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchChampions } from '../../services/redux/actions/championActions';
import WorldChampionCard from '../WorldChampionCard/WorldChampionCard';

class WorldChampionsList extends Component {
  static sortBySeason(array) {
    array.sort((a, b) => a.season - b.season);
  }

  constructor(props) {
    super(props);
    this.state = {
      seasons: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015],
    };
  }

  componentWillMount() {
    this.fetchChampions();
  }

  fetchChampions() {
    this.props.fetchChampions(this.state.seasons);
  }

  checkAllChampionsFetched(champions) {
    return champions.lenght === this.state.seasons;
  }

  render() {
    const { champions } = this.props;
    return (
      <div className="row mx-2 mt-3">
        {this.checkAllChampionsFetched(champions)
          ? WorldChampionsList.sortBySeason(champions)
            .map((x, index) => (<WorldChampionCard champion={x} key={index} />))
          : null}
      </div>
    );
  }
}

WorldChampionsList.propTypes = {
  fetchChampions: PropTypes.func.isRequired,
  champions: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  champions: state.champions.items,
});

export default connect(mapStateToProps, { fetchChampions })(WorldChampionsList);
