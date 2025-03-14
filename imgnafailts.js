const lightningLaneRides = [
  { name: "Space Mountain", time: "9:00 AM - 10:00 AM", availableSpots: 8 },
  {
    name: "Big Thunder Mountain",
    time: "10:30 AM - 11:30 AM",
    availableSpots: 5,
  },
  { name: "Splash Mountain", time: "12:00 PM - 1:00 PM", availableSpots: 4 },
  {
    name: "Pirates of the Caribbean",
    time: "1:30 PM - 2:30 PM",
    availableSpots: 6,
  },
  { name: "Haunted Mansion", time: "3:00 PM - 4:00 PM", availableSpots: 7 },
  {
    name: "Seven Dwarfs Mine Train",
    time: "4:30 PM - 5:30 PM",
    availableSpots: 3,
  },
  { name: "Jungle Cruise", time: "5:30 PM - 6:30 PM", availableSpots: 10 },
  { name: "Peter Pan's Flight", time: "7:00 PM - 8:00 PM", availableSpots: 5 },
  {
    name: "The Twilight Zone Tower of Terror",
    time: "8:30 PM - 9:30 PM",
    availableSpots: 4,
  },
  {
    name: "Guardians of the Galaxy: Cosmic Rewind",
    time: "10:00 PM - 11:00 PM",
    availableSpots: 6,
  },
];

const guestPreferences = {
  name: "Jordan",
  partySize: 4,
  rideChoices: [
    "Space Mountain",
    "Big Thunder Mountain",
    "Splash Mountain",
    "Pirates of the Caribbean",
    "Haunted Mansion",
  ],
};

function express2(guestPreferences) {
  const x1 = lightningLaneRides.filter((object) =>
    guestPreferences.rideChoices.includes(object.name)
  );
  let x2 = x1.filter(
    (object) => object.availableSpots - guestPreferences.partySize > 0
  );
  x2.forEach((ride) => {
    let newSize = ride.availableSpots - guestPreferences.partySize;
    ride.availableSpots = newSize;
  });
  console.log(x2);
}

express2(guestPreferences);
