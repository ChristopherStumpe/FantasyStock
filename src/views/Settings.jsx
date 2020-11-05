import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { selectUser } from '../features/userSlice.js';
import { selectLeague } from '../features/leagueSlice.js';
import SettingsLeague from '../components/Settings/SettingsLeague.jsx';

function Settings() {
  const [myLeague, setMyLeague] = useState({});
  const league = useSelector(selectLeague);
  const user = useSelector(selectUser);

  useEffect(() => {
    async function fetchLeague() {
      const response = await axios.post(`/league/${league}`, { id_owner: user?.id });
      setMyLeague(response.data);
      return response;
    }
    fetchLeague();
  }, [league, user]);

  return (
    <div>
      <SettingsLeague myLeague={myLeague} />
    </div>
  );
}

export default Settings;