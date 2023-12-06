import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotPage() {
  const [allBots, setAllBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);

  useEffect(() => {

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

    if (!enlistedBots.find((enlistedBot) => enlistedBot.id === bot.id)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };

  const dischargeBot = async (bot) => {

    try {

      await fetch(`http://localhost:8002/bots/${bot.id}`, {
        method: "DELETE",
      });


      const updatedEnlistedBots = enlistedBots.filter((enlistedBot) => enlistedBot.id !== bot.id);
      setEnlistedBots(updatedEnlistedBots);
    } catch (error) {
      console.error("Error discharging bot:", error);
    }
  };

  return (
    <div>
      <YourBotArmy enlistedBots={enlistedBots} dischargeBot={dischargeBot} />
      <BotCollection bots={allBots} enlistBot={enlistBot} />
    </div>
  );
}

export default BotPage;
