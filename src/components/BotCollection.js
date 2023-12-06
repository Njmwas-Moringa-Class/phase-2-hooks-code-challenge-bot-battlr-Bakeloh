// import React from "react";

// function BotCollection({ bots, enlistBot }) {
//   return (
//     <div className="ui four column grid">
//       <div className="row">
//         {bots.map((bot) => (
//           <div key={bot.id} className="column">
//             <div className="ui card">
//               <div className="content">
//                 <img src={bot.avatar_url} alt={bot.name} className="ui image" />
//                 <div className="header">{bot.name}</div>
//                 <div className="meta">{bot.bot_class}</div>
//                 <div className="description">
//                   <p>Health: {bot.health}</p>
//                   <p>Damage: {bot.damage}</p>
//                   <p>Armor: {bot.armor}</p>
//                 </div>
//                 <div className="extra content">
//                   <button
//                     className="ui primary button"
//                     onClick={() => enlistBot(bot)}
//                   >
//                     Enlist
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default BotCollection;

// BotCollection.js
import React, { useState } from "react";

function BotCollection({ bots, enlistBot }) {
  const [enlistedBots, setEnlistedBots] = useState([]);

  const handleEnlist = (bot) => {
    // Add the bot to the enlisted bots
    setEnlistedBots([...enlistedBots, bot]);

    // Call the parent component's enlistBot function
    enlistBot(bot);
  };

  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot) => (
          <div key={bot.id} className="column">
            <div className="ui card">
              <div className="content">
                <img src={bot.avatar_url} alt={bot.name} className="ui image" />
                <div className="header">{bot.name}</div>
                <div className="meta">{bot.bot_class}</div>
                <div className="description">
                  <p>Health: {bot.health}</p>
                  <p>Damage: {bot.damage}</p>
                  <p>Armor: {bot.armor}</p>
                </div>
                <div className="extra content">
                  <button
                    className="ui primary button"
                    onClick={() => handleEnlist(bot)}
                  >
                    Enlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
