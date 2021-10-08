const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];
const goodStations =[]
const chooseStations = function (stations) {
  for (const station of stations) {
    if (station[1] >= 20) {
      goodStations.push(station[0])
    }
  }
  console.log(goodStations)
}
chooseStations(stations)