import React from "react";
import Card from "./Card";
import contacts from "../contacts";

// function App() {
//   return (
//     <div>
//       <h1 className="heading">My Contacts</h1>
//       <Card
//        name ="Beyonce"
//        src ="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
//        alt = "avatar_img"
//        info ="+123 456 789"
//        info ="b@beyonce.com"/>
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={contacts[0].name}
        src={contacts[0].imgURL}
        alt="avatar_img"
        info={contacts[0].phone}
        info={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        src={contacts[1].imgURL}
        alt="avatar_img"
        info={contacts[1].phone}
        info={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        src={contacts[2].imgURL}
        alt="avatar_img"
        info={contacts[2].phone}
        info={contacts[2].email}
      />
    </div>
  );
}

export default App;
