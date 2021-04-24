import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Players.css";

 
const BASE_URL = 'https://fortnite-api.com/v1/stats/br/v2/c7a8a25ce0424668a16ad609d095d43a';



const Martin = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(`${BASE_URL}`)
            .then(({ data }) => setData(data))
            .catch(console.error)

    }, []);

    return (
    <div class="a">
      {
        data ?
      <div class="player"> 
        <div className="player_name">
          <h1>{data.data.account.name}</h1> 
       
       <div className="play_time">
          Odehraných minut: {data.data.stats.all.overall.minutesPlayed}
       </div> 
       <div className="play_time">
          Odehraných her: {data.data.stats.all.overall.matches}
       </div> 
       </div> 
       <br></br>
       <div className="total"> 
       <h1>Total: </h1>
       <div className="player_kd">
          <h1>Kd: {data.data.stats.all.overall.kd}</h1> 
       </div>
       <div className="player_total_wins">
          <h2> Wins: {data.data.stats.all.overall.wins}</h2> 
       </div>
       <div className="player_total_kills">
          <h1> Kills: {data.data.stats.all.overall.kills}</h1> 
       </div>
       </div>
       <br></br>
    <div className="solo"> 
      <h1>Solo: </h1> 
       <div className="player_kd">
          <h1>Kd: {data.data.stats.all.solo.kd}</h1> 
       </div>
       <div className="player_solo_wins">
          <h2> Wins: {data.data.stats.all.solo.wins}</h2> 
       </div>
       <div className="player_solo_kills">
          <h1> Kills: {data.data.stats.all.solo.kills}</h1> 
       </div>
    </div>
    <br></br>
    <div className="duo"> 
      <h1>Duo: </h1> 
       <div className="player_kd">
          <h1>Kd: {data.data.stats.all.duo.kd}</h1> 
       </div>
       <div className="player_duo_wins">
          <h2> Wins: {data.data.stats.all.duo.wins}</h2> 
       </div>
       <div className="player_duo_kills">
          <h1> Kills: {data.data.stats.all.duo.kills}</h1> 
       </div>
    </div>
    <br></br>
    <div className="trio"> 
        <h1>Trio: </h1> 
         <div className="player_kd">
            <h1>Kd: {data.data.stats.all.trio.kd}</h1> 
         </div>
         <div className="player_squad_wins">
            <h2> Wins: {data.data.stats.all.trio.wins}</h2> 
         </div>
         <div className="player_squad_kills">
            <h1> Kills: {data.data.stats.all.trio.kills}</h1> 
         </div>
      </div>
      <br></br>
    <div className="squad"> 
        <h1>Squad: </h1> 
         <div className="player_kd">
            <h1>Kd: {data.data.stats.all.squad.kd}</h1> 
         </div>
         <div className="player_wins">
            <h2> Wins: {data.data.stats.all.squad.wins}</h2> 
         </div>
         <div className="player_squad_kills">
            <h1> Kills: {data.data.stats.all.squad.kills}</h1> 
         </div>
      </div>
    
      </div>
      :<p class="player">chvíli počkej....</p> 
      }
    
    </div>
    
    );
};

export default Martin ;