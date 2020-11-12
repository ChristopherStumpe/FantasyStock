import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import AddMembers from './AddMembers.jsx';
import '../../css/SettingsLeague.css';
import CardSettingsL from './CardSettingsL.jsx';
import AccordionComp from '../AccordionComp.jsx';

const inputsForm = [
  {
    description: '# of teams',
    type: 'number',
    name: 'numberTeams'
  },
  {
    description: 'matches number of days',
    type: 'number',
    name: 'lengthMatches'
  },
  {
    description: '# of matches',
    type: 'number',
    name: 'numberMatches'
  },
  {
    description: 'start date',
    type: 'date',
    name: 'startDate'
  },
  {
    description: 'end date',
    type: 'date',
    name: 'endDate'
  },
  {
    description: '# of playoff teams',
    type: 'number',
    name: 'numberTeamsPlayoffs'
  },
  {
    description: 'starting bank',
    type: 'number',
    name: 'startingBank'
  }
];

function SettingsLeague({ myLeague, setMyLeague }) {
  SettingsLeague.propTypes = {
    setMyLeague: PropTypes.func.isRequired,
    myLeague: PropTypes.shape({
      league_name: PropTypes.string,
      bank_balance: PropTypes.string,
      id: PropTypes.string,
      id_owner: PropTypes.number
    }).isRequired
  };

  const [leagueUsers, setLeagueUsers] = useState([]);

  useEffect(() => {
    axios.get(`/league/league/${myLeague.id}`)
      .then((response) => setLeagueUsers(response.data));
  }, [myLeague.id]);

  const Component = () => (
    <CardSettingsL
      setMyLeague={setMyLeague}
      myLeague={myLeague}
      inputsForm={inputsForm}
    />
  );

  return (
    <div className='settingsLeague'>
      <AccordionComp Component={Component} title='League Settings' />
      <div className='settingsLeague_addMembers'>
        <AddMembers leagueUsers={leagueUsers} myLeague={myLeague} setLeagueUsers={setLeagueUsers} />
      </div>
    </div>
  );
}

export default SettingsLeague;
