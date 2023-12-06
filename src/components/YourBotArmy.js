// import React from "react";

// function YourBotArmy({ bots }) {
//   return (
//     <div className="ui segment inverted olive bot-army">
//       <div className="ui five column grid">
//         <div className="row bot-army-row">
//           {bots.map((bot) => (
//             <div key={bot.id} className="column">
//               <div className="ui card">
//                 <div className="content">
//                   <div className="header">{bot.name}</div>
//                   <div className="meta">{bot.bot_class}</div>
//                   <div className="description">
//                     <p>Health: {bot.health}</p>
//                     <p>Damage: {bot.damage}</p>
//                     <p>Armor: {bot.armor}</p>
//                     {/* Add more details as needed */}
//                   </div>
//                   {/* Add more actions or details if needed */}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default YourBotArmy;


// YourBotArmy.js
// YourBotArmy.js
// YourBotArmy.js
// YourBotArmy.js
import React from "react";

function YourBotArmy({ enlistedBots, dischargeBot }) {
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {enlistedBots.map((bot) => (
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
                      className="ui red button"
                      onClick={() => dischargeBot(bot)}
                    >
                      Discharge
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;




