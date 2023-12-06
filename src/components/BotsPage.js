// import React, { useEffect, useState } from "react";
// import YourBotArmy from "./YourBotArmy";
// import BotCollection from "./BotCollection";

// function BotsPage() {
//   const [bots, setBots] = useState([]);

//   useEffect(() => {
//     const fetchBots = async () => {
//       try {

//         const response = await fetch("http://localhost:8002/bots");
//         const data = await response.json();
//         setBots(data);
//       } catch (error) {
//         console.error("Error fetching bots:", error);
//       }
//     };

//     fetchBots();
//   }, []);

//   return (
//     <div>
//       <YourBotArmy bots={bots} />
//       <BotCollection bots={bots} />
//       {/* <YourBotArmy enlistedBots={selectedBots} dischargeBot={dischargeBot} />
//       <BotCollection allBots={allBots} enlistBot={enlistBot} releaseBot={releaseBot} /> */}
//     </div>
//   );
// }

// export default BotsPage;





// BotPage.js
// import React, { useState, useEffect } from "react";
// import YourBotArmy from "./YourBotArmy";
// import BotCollection from "./BotCollection";

// function BotPage() {
//   const [allBots, setAllBots] = useState([]);
//   const [selectedBots, setSelectedBots] = useState([]);

//   useEffect(() => {
//     // Fetch all bots from your API and update the state
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:8002/bots");
//         const data = await response.json();
//         setAllBots(data);
//       } catch (error) {
//         console.error("Error fetching bots:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const enlistBot = (bot) => {
//     // Check if the bot is not already enlisted
//     if (!selectedBots.find((selectedBot) => selectedBot.id === bot.id)) {
//       setSelectedBots([...selectedBots, bot]);
//     }
//   };

//   const releaseBot = (bot) => {
//     // Remove the bot from the enlisted bots
//     const updatedBots = selectedBots.filter((selectedBot) => selectedBot.id !== bot.id);
//     setSelectedBots(updatedBots);
//   };

//   const dischargeBot = async (bot) => {
//     // Remove the bot from both frontend and backend
//     try {
//       // Delete the bot on the backend
//       await fetch(`http://localhost:8002/bots/${bot.id}`, {
//         method: "DELETE",
//       });

//       // Remove the bot from the enlisted bots on the frontend
//       const updatedBots = selectedBots.filter((selectedBot) => selectedBot.id !== bot.id);
//       setSelectedBots(updatedBots);
//     } catch (error) {
//       console.error("Error discharging bot:", error);
//     }
//   };

//   return (
//     <div>
//       <YourBotArmy enlistedBots={selectedBots} dischargeBot={dischargeBot} />
//       <BotCollection allBots={allBots} enlistBot={enlistBot} releaseBot={releaseBot} />
//     </div>
//   );
// }

// export default BotPage;

import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotPage() {
  const [allBots, setAllBots] = useState([]);
  const [selectedBots, setSelectedBots] = useState([]);

  useEffect(() => {
    // Fetch all bots from your API and update the state
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8002/bots");
        const data = await response.json();
        setAllBots(data);
      } catch (error) {
        console.error("Error fetching bots:", error);
      }
    };

    fetchData();
  }, []);

  const enlistBot = (bot) => {
    // Check if the bot is not already enlisted
    if (!selectedBots.find((selectedBot) => selectedBot.id === bot.id)) {
      setSelectedBots([...selectedBots, bot]);
    }
  };

  const dischargeBot = async (bot) => {
    // Remove the bot from both frontend and backend
    try {
      // Delete the bot on the backend
      await fetch(`http://localhost:8002/bots/${bot.id}`, {
        method: "DELETE",
      });

      // Remove the bot from the enlisted bots on the frontend
      const updatedBots = selectedBots.filter((selectedBot) => selectedBot.id !== bot.id);
      setSelectedBots(updatedBots);
    } catch (error) {
      console.error("Error discharging bot:", error);
    }
  };

  return (
    <div>
      <YourBotArmy enlistedBots={selectedBots} dischargeBot={dischargeBot} />
      <BotCollection bots={allBots} enlistBot={enlistBot} />
    </div>
  );
}

export default BotPage;

