function getColor(d) {
    return d === 'wind' ? "#14A7E5" :
           d === 'solar' ? "#F8C52A" :
           d === 'gas' ? "#C23596" :
           d === 'other' ? "#1C0B2A" :
           d === 'hydro' ? "#3069B1" :
           d === 'oil' ? "#1C0B2A" :
           d === 'coal' ? "#B2B2B2" :
           d === 'nuclear' ? "#4CAE37" :
           d === 'biomass' ? "#FE9B32" :
           d === 'gas, oil' ? "#C23596" :
           d === 'coal, biomass' ? "#FE9B32" :
                        "#1C0B2A";
}

function capitalise(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

document.addEventListener("DOMContentLoaded", function() {
    var mymap = L.map('map').setView([53.96, -3.22], 5);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoiZW5lcmd5dmlzIiwiYSI6ImNrbjR2aWo4azBsaHEycHM5dHByZzFnZW8ifQ.MyLCIQqHnNHQFWJQqs-j4w'
    }).addTo(mymap);

    var geojsonFeature = {'type': 'FeatureCollection', 'features': [{'id': '10000', 'type': 'Feature', 'properties': {'fuel_type': 'biomass', 'latitude': 57.480403, 'longitude': -3.603516, 'name': 'Rothes Bio-Plant CHP', 'output': 55.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-3.603516, 57.480403]}}, {'id': '10004', 'type': 'Feature', 'properties': {'fuel_type': 'coal, biomass', 'latitude': 53.748711, 'longitude': -0.626221, 'name': 'Drax', 'output': 1950.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.626221, 53.748711]}}, {'id': '10010', 'type': 'Feature', 'properties': {'fuel_type': 'coal', 'latitude': 55.20417, 'longitude': -1.52083, 'name': 'Lynemouth Generator', 'output': 405.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-1.52083, 55.20417]}}, {'id': '10011', 'type': 'Feature', 'properties': {'fuel_type': 'coal', 'latitude': 52.855864, 'longitude': -1.219482, 'name': 'Ratcliffe on Soar', 'output': 500.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-1.219482, 52.855864]}}, {'id': '10014', 'type': 'Feature', 'properties': {'fuel_type': 'coal', 'latitude': 53.363665000000005, 'longitude': -0.53833, 'name': 'West Burton A', 'output': 420.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.53833, 53.363665000000005]}}, {'id': '10027', 'type': 'Feature', 'properties': {'fuel_type': 'gas', 'latitude': 53.455349, 'longitude': -2.504883, 'name': 'Carrington', 'output': 838.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-2.504883, 53.455349]}}, {'id': '10029', 'type': 'Feature', 'properties': {'fuel_type': 'gas', 'latitude': 53.231871, 'longitude': -3.080651, 'name': 'Connahs Quay', 'output': 663.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-3.080651, 53.231871]}}, {'id': '10035', 'type': 'Feature', 'properties': {'fuel_type': 'gas', 'latitude': 51.62363, 'longitude': -1.26757, 'name': 'Didcot B', 'output': 629.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-1.26757, 51.62363]}}, {'id': '10036', 'type': 'Feature', 'properties': {'fuel_type': 'gas', 'latitude': 51.662337, 'longitude': -0.022763, 'name': 'Enfield Energy', 'output': 400.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.022763, 51.662337]}}, {'id': '10038', 'type': 'Feature', 'properties': {'fuel_type': 'gas', 'latitude': 52.596375, 'longitude': 1.625977, 'name': 'Great Yarmouth', 'output': 384.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [1.625977, 52.596375]}}, {'id': '10039', 'type': 'Feature', 'properties': {'fuel_type': 'gas', 'latitude': 53.585984, 'longitude': -0.494385, 'name': 'Keadby', 'output': 713.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.494385, 53.585984]}}, {'id': '10042', 'type': 'Feature', 'properties': {'fuel_type': 'gas', 'latitude': 52.727256, 'longitude': 0.380117, 'name': 'Kings Lynn', 'output': 351.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [0.380117, 52.727256]}}, {'id': '10043', 'type': 'Feature', 'properties': {'fuel_type': 'gas', 'latitude': 50.492463, 'longitude': -3.966064, 'name': 'Langage', 'output': 807.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-3.966064, 50.492463]}}, {'id': '10045', 'type': 'Feature', 'properties': {'fuel_type': 'gas', 'latitude': 50.903033, 'longitude': -1.351318, 'name': 'Marchwood', 'output': 835.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-1.351318, 50.903033]}}, {'id': '10047', 'type': 'Feature', 'properties': {'fuel_type': 'gas', 'latitude': 51.684368, 'longitude': -4.996378, 'name': 'Pembroke Power Station -', 'output': 1672.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-4.996378, 51.684368]}}, {'id': '10052', 'type': 'Feature', 'properties': {'fuel_type': 'gas', 'latitude': 53.83308100000001, 'longitude': -0.1318359999999999, 'name': 'Saltend South', 'output': 723.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.1318359999999999, 53.83308100000001]}}, {'id': '10055', 'type': 'Feature', 'properties': {'fuel_type': 'gas', 'latitude': 50.882243, 'longitude': -0.252686, 'name': 'Shoreham', 'output': 370.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.252686, 50.882243]}}, {'id': '10056', 'type': 'Feature', 'properties': {'fuel_type': 'gas', 'latitude': 53.618579, 'longitude': -0.1318359999999999, 'name': 'South Humber Bank', 'output': 1266.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.1318359999999999, 53.618579]}}, {'id': '10057', 'type': 'Feature', 'properties': {'fuel_type': 'gas', 'latitude': 52.81604300000001, 'longitude': -0.252686, 'name': 'Spalding', 'output': 760.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.252686, 52.81604300000001]}}, {'id': '10058', 'type': 'Feature', 'properties': {'fuel_type': 'gas', 'latitude': 53.041213, 'longitude': -0.98877, 'name': 'Staythorpe', 'output': 1238.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.98877, 53.041213]}}, {'id': '10062', 'type': 'Feature', 'properties': {'fuel_type': 'gas', 'latitude': 53.363665000000005, 'longitude': -0.53833, 'name': 'West Burton B', 'output': 832.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.53833, 53.363665000000005]}}, {'id': '10067', 'type': 'Feature', 'properties': {'fuel_type': 'gas, oil', 'latitude': 51.474540000000005, 'longitude': 0.703125, 'name': 'Grain CHP', 'output': 410.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [0.703125, 51.474540000000005]}}, {'id': '10068', 'type': 'Feature', 'properties': {'fuel_type': 'gas', 'latitude': 55.930741000000005, 'longitude': -3.032227, 'name': 'Grangemouth CHP Ltd', 'output': 140.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-3.032227, 55.930741000000005]}}, {'id': '10070', 'type': 'Feature', 'properties': {'fuel_type': 'gas', 'latitude': 53.690201, 'longitude': 0.0, 'name': 'Immingham CHP', 'output': 688.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [0.0, 53.690201]}}, {'id': '10101', 'type': 'Feature', 'properties': {'fuel_type': 'oil', 'latitude': 57.527622, 'longitude': -1.867676, 'name': 'Peterhead', 'output': 1015.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-1.867676, 57.527622]}}, {'id': '10107', 'type': 'Feature', 'properties': {'fuel_type': 'hydro', 'latitude': 57.444705000000006, 'longitude': -4.552586, 'name': 'Beauly Cascade', 'output': 7.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-4.552586, 57.444705000000006]}}, {'id': '10109', 'type': 'Feature', 'properties': {'fuel_type': 'hydro', 'latitude': 56.716948, 'longitude': -3.778355, 'name': 'Clunie Cascade', 'output': 19.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-3.778355, 56.716948]}}, {'id': '10110', 'type': 'Feature', 'properties': {'fuel_type': 'hydro', 'latitude': 57.619203000000006, 'longitude': -4.830066, 'name': 'Conon Cascade', 'output': 35.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-4.830066, 57.619203000000006]}}, {'id': '10116', 'type': 'Feature', 'properties': {'fuel_type': 'hydro', 'latitude': 57.325887, 'longitude': -4.793703, 'name': 'Fasnakyle G', 'output': 51.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-4.793703, 57.325887]}}, {'id': '10117', 'type': 'Feature', 'properties': {'fuel_type': 'hydro', 'latitude': 56.279961, 'longitude': -3.614502, 'name': 'Finlarig', 'output': 17.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-3.614502, 56.279961]}}, {'id': '10120', 'type': 'Feature', 'properties': {'fuel_type': 'hydro', 'latitude': 56.470679, 'longitude': -4.3077510000000006, 'name': 'Killin Cascade', 'output': 28.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-4.3077510000000006, 56.470679]}}, {'id': '10122', 'type': 'Feature', 'properties': {'fuel_type': 'hydro', 'latitude': 57.144936, 'longitude': -4.962463, 'name': 'Moriston Cascade', 'output': 34.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-4.962463, 57.144936]}}, {'id': '10130', 'type': 'Feature', 'properties': {'fuel_type': 'nuclear', 'latitude': 54.686534, 'longitude': -1.098633, 'name': 'Hartlepool', 'output': 1155.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-1.098633, 54.686534]}}, {'id': '10131', 'type': 'Feature', 'properties': {'fuel_type': 'nuclear', 'latitude': 54.02888889, 'longitude': -2.916111111, 'name': 'Heysham 1', 'output': 983.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-2.916111111, 54.02888889]}}, {'id': '10132', 'type': 'Feature', 'properties': {'fuel_type': 'nuclear', 'latitude': 54.02888889, 'longitude': -2.916111111, 'name': 'Heysham 2', 'output': 633.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-2.916111111, 54.02888889]}}, {'id': '10133', 'type': 'Feature', 'properties': {'fuel_type': 'nuclear', 'latitude': 51.138001, 'longitude': -3.317871, 'name': 'Hinkley Point B', 'output': 979.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-3.317871, 51.138001]}}, {'id': '10134', 'type': 'Feature', 'properties': {'fuel_type': 'nuclear', 'latitude': 55.646599, 'longitude': -4.822998, 'name': 'Hunterston Generator', 'output': 993.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-4.822998, 55.646599]}}, {'id': '10138', 'type': 'Feature', 'properties': {'fuel_type': 'nuclear', 'latitude': 55.813629000000006, 'longitude': -2.054443, 'name': 'Torness Generator', 'output': 1277.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-2.054443, 55.813629000000006]}}, {'id': '10144', 'type': 'Feature', 'properties': {'fuel_type': 'hydro', 'latitude': 53.080827, 'longitude': -3.966064, 'name': 'Dinorwig', 'output': 300.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-3.966064, 53.080827]}}, {'id': '10146', 'type': 'Feature', 'properties': {'fuel_type': 'hydro', 'latitude': 57.237449, 'longitude': -4.361572, 'name': 'Foyers G', 'output': 300.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-4.361572, 57.237449]}}, {'id': '10148', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 55.923317, 'longitude': -2.492993, 'name': 'Aikengall 2 Wind Farm Generation', 'output': 5.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-2.492993, 55.923317]}}, {'id': '10149', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 54.970896, 'longitude': -4.713441, 'name': 'Airies Windfarm', 'output': 8.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-4.713441, 54.970896]}}, {'id': '10150', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 55.51487, 'longitude': -3.814161, 'name': 'Andershaw Wind Farm', 'output': 5.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-3.814161, 55.51487]}}, {'id': '10151', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 56.065903000000006, 'longitude': -5.449219, 'name': 'An Suidhe Windfarm', 'output': 5.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-5.449219, 56.065903000000006]}}, {'id': '10154', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 55.621764, 'longitude': -3.988675, 'name': 'Auchrobert Wind Farm', 'output': 3.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-3.988675, 55.621764]}}, {'id': '10155', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 58.430482, 'longitude': -4.372559, 'name': 'Baillie Wind Farm', 'output': 5.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-4.372559, 58.430482]}}, {'id': '10156', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 53.983333, 'longitude': -3.2833330000000003, 'name': 'Barrow Offshore Windfarm', 'output': 1.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-3.2833330000000003, 53.983333]}}, {'id': '10157', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 55.683779, 'longitude': -5.537109, 'name': 'Beinn An Tuirc 2 Windfarm', 'output': 1.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-5.537109, 55.683779]}}, {'id': '10158', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 57.17555556, 'longitude': -4.789059, 'name': 'Beinneun Wind Farm', 'output': 14.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-4.789059, 57.17555556]}}, {'id': '10159', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 58.077876, 'longitude': -4.42749, 'name': 'Beinn Tharsuinn', 'output': 2.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-4.42749, 58.077876]}}, {'id': '10160', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 57.36209, 'longitude': -3.966064, 'name': 'Berry Burn Windfarm', 'output': 5.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-3.966064, 57.36209]}}, {'id': '10161', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 57.22303, 'longitude': -4.668919, 'name': 'Bhlaraidh Windfarm 1', 'output': 14.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-4.668919, 57.22303]}}, {'id': '10166', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 56.419978, 'longitude': -3.361816, 'name': 'Braes of Doune', 'output': 12.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-3.361816, 56.419978]}}, {'id': '10169', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 53.487739000000005, 'longitude': -3.19582, 'name': 'Burbo Bank Offshore Windfarm', 'output': 2.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-3.19582, 53.487739000000005]}}, {'id': '10170', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 53.484, 'longitude': -3.273, 'name': 'Burbo Bank Wind Farm Extension', 'output': 8.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-3.273, 53.484]}}, {'id': '10171', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 58.351973, 'longitude': -3.21433, 'name': 'Burn of Whilk Windfarm', 'output': 1.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-3.21433, 58.351973]}}, {'id': '10172', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 57.504968000000005, 'longitude': -3.063895, 'name': 'Cairn Uish / Rothes Windfarm Extension', 'output': 6.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-3.063895, 57.504968000000005]}}, {'id': '10173', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 58.406935, 'longitude': -3.2701290000000003, 'name': 'Camster Wind Farm', 'output': 2.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-3.2701290000000003, 58.406935]}}, {'id': '10174', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 56.389584, 'longitude': -4.790039, 'name': 'Carraig Gheal Wind Farm', 'output': 1.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-4.790039, 56.389584]}}, {'id': '10177', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 55.310391, 'longitude': -3.35083, 'name': 'Clyde Central Windfarm, Clyde North Windfarm, Clyde South Windfarm', 'output': 2.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-3.35083, 55.310391]}}, {'id': '10178', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 57.190085, 'longitude': -4.359638, 'name': 'Corriegarth Wind Farm', 'output': 18.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-4.359638, 57.190085]}}, {'id': '10179', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 57.694245, 'longitude': -4.838531, 'name': 'Corriemoillie Wind Farm', 'output': 6.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-4.838531, 57.694245]}}, {'id': '10180', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 55.680679000000005, 'longitude': -5.484929, 'name': 'Cour Wind Farm', 'output': 1.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-5.484929, 55.680679000000005]}}, {'id': '10181', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 55.893796, 'longitude': -2.39502, 'name': 'Crystal Rig III Wind Farm', 'output': 2.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-2.39502, 55.893796]}}, {'id': '10182', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 55.893796, 'longitude': -2.39502, 'name': 'Crystal Rig Wind Farm - Phase 2', 'output': 12.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-2.39502, 55.893796]}}, {'id': '10185', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 53.249, 'longitude': 1.39, 'name': 'Dudgeon Offshore Wind Farm Generator', 'output': 4.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [1.39, 53.249]}}, {'id': '10187', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 57.25148000000001, 'longitude': -4.255802, 'name': 'Dunmglass Wind Farm', 'output': 13.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-4.255802, 57.25148000000001]}}, {'id': '10188', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 57.27904300000001, 'longitude': -6.229248, 'name': 'Edinbane Windfarm', 'output': 6.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-6.229248, 57.27904300000001]}}, {'id': '10190', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 55.93689499999999, 'longitude': -2.768555, 'name': 'Fallago Rig Wind Farm', 'output': 13.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-2.768555, 55.93689499999999]}}, {'id': '10191', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 57.325, 'longitude': -4.094167, 'name': 'Farr Wind Farm', 'output': 39.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-4.094167, 57.325]}}, {'id': '10192', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 55.780803000000006, 'longitude': -5.479858999999999, 'name': 'Freasdail Wind Farm', 'output': 1.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-5.479858999999999, 55.780803000000006]}}, {'id': '10193', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 55.534273, 'longitude': -3.921928, 'name': 'Galawhistle Wind Farm', 'output': 2.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-3.921928, 55.534273]}}, {'id': '10194', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 51.893, 'longitude': 2.035, 'name': 'Galloper Offshore Windfarm 1', 'output': 178.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [2.035, 51.893]}}, {'id': '10198', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 53.668356, 'longitude': -0.8724209999999999, 'name': 'Goole Fields 1 Windfarm', 'output': 2.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.8724209999999999, 53.668356]}}, {'id': '10200', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 57.460944, 'longitude': -2.484139, 'name': 'Gordonstown Windfarm', 'output': 5.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-2.484139, 57.460944]}}, {'id': '10201', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 52.066, 'longitude': 1.7138669999999998, 'name': 'Greater Gabbard Offshore Windfarm', 'output': 51.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [1.7138669999999998, 52.066]}}, {'id': '10202', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 56.529199, 'longitude': -3.394775, 'name': 'Griffin Wind Farm', 'output': 2.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-3.394775, 56.529199]}}, {'id': '10204', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 51.739444, 'longitude': 1.174444, 'name': 'Gunfleet Sands Windfarm  1', 'output': 14.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [1.174444, 51.739444]}}, {'id': '10205', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 51.739444, 'longitude': 1.174444, 'name': 'Gunfleet Sands Windfarm  2', 'output': 10.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [1.174444, 51.739444]}}, {'id': '10207', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 53.376775, 'longitude': -3.944092, 'name': 'Gwynt y Mor Wind Farm East 1', 'output': 40.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-3.944092, 53.376775]}}, {'id': '10208', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 55.247815, 'longitude': -4.702148, 'name': 'Hadyard Hill Wind Farm', 'output': 1.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-4.702148, 55.247815]}}, {'id': '10209', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 55.815259, 'longitude': -3.547456, 'name': 'Harburnhead Wind Farm', 'output': 1.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-3.547456, 55.815259]}}, {'id': '10212', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 57.51051999999999, 'longitude': -3.615587, 'name': 'Hill of Glaschyle Windfarm', 'output': 2.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-3.615587, 57.51051999999999]}}, {'id': '10214', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 53.644, 'longitude': 0.293, 'name': 'Humber Offshore Wind Farm', 'output': 98.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [0.293, 53.644]}}, {'id': '10219', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 53.265213, 'longitude': 0.5273439999999999, 'name': 'Lincs Offshore Wind Farm', 'output': 20.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [0.5273439999999999, 53.265213]}}, {'id': '10220', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 57.73935, 'longitude': -4.559326, 'name': 'Lochluichart Windfarm', 'output': 5.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-4.559326, 57.73935]}}, {'id': '10221', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 51.645294, 'longitude': 1.362305, 'name': 'London Array Windfarm', 'output': 49.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [1.362305, 51.645294]}}, {'id': '10223', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 56.964685, 'longitude': -2.482026, 'name': 'Mid Hill Windfarm', 'output': 4.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-2.482026, 56.964685]}}, {'id': '10224', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 57.219608, 'longitude': -4.866943, 'name': 'Millennium Wind Farm', 'output': 5.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-4.866943, 57.219608]}}, {'id': '10228', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 57.39099399999999, 'longitude': -4.052356, 'name': 'Moy Windfarm', 'output': 2.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-4.052356, 57.39099399999999]}}, {'id': '10232', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 51.710658, 'longitude': -3.561358, 'name': 'Pen y Cymoedd Wind Farm', 'output': 3.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-3.561358, 51.710658]}}, {'id': '10233', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 53.276, 'longitude': 0.841, 'name': 'Race Bank Offshore Wind Farm', 'output': 11.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [0.841, 53.276]}}, {'id': '10234', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 50.67, 'longitude': -0.27, 'name': 'Rampion Offshore Windfarm', 'output': 8.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.27, 50.67]}}, {'id': '10239', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 53.135, 'longitude': 1.147, 'name': 'Sheringham Shoals Windfarm  1', 'output': 10.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [1.147, 53.135]}}, {'id': '10240', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 58.385271, 'longitude': -3.89086, 'name': 'Strathy North Wind Farm 1', 'output': 8.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-3.89086, 58.385271]}}, {'id': '10242', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 51.385495, 'longitude': 1.461182, 'name': 'Thanet Offshore Windfarm', 'output': 26.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [1.461182, 51.385495]}}, {'id': '10243', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 55.77, 'longitude': -2.81, 'name': 'Toddleburn Wind Farm', 'output': 1.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-2.81, 55.77]}}, {'id': '10244', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 56.662265000000005, 'longitude': -2.581787, 'name': 'Tullo', 'output': 1.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-2.581787, 56.662265000000005]}}, {'id': '10245', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 53.981935, 'longitude': -3.603516, 'name': 'Walney Offshore Windfarm (Extension)', 'output': 7.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-3.603516, 53.981935]}}, {'id': '10248', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 53.943155, 'longitude': 0.6811520000000001, 'name': 'Westermost Rough Windfarm', 'output': 85.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [0.6811520000000001, 53.943155]}}, {'id': '10252', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 55.702355, 'longitude': -4.042969, 'name': 'Whitelee Wind Farm', 'output': 4.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-4.042969, 55.702355]}}, {'id': '10253', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 55.702355, 'longitude': -4.042969, 'name': 'Whitelee Windfarm Extension', 'output': 3.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-4.042969, 55.702355]}}, {'id': '10279', 'type': 'Feature', 'properties': {'fuel_type': 'gas', 'latitude': 51.982208, 'longitude': -0.201175, 'name': 'Letchworth', 'output': 10.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.201175, 51.982208]}}, {'id': '10284', 'type': 'Feature', 'properties': {'fuel_type': 'wind', 'latitude': 57.09986899999999, 'longitude': -4.461346, 'name': 'Stronelairg Windfarm', 'output': 14.0, 'output_time': '2021-06-17 07:00'}, 'geometry': {'type': 'Point', 'coordinates': [-4.461346, 57.09986899999999]}}]}

    var geoJson = new L.geoJSON(geojsonFeature, {
        pointToLayer: (feature, latlng) => {
            return new L.Circle(
                [feature.properties.latitude, feature.properties.longitude], 
                Math.sqrt(feature.properties.output)*1000, {
                    fillOpacity: .75,
                    weight: 2,
                    color: getColor(feature.properties.fuel_type)
                }
            );
        },
        onEachFeature: function (feature, layer) {
            layer.bindPopup('<p>Name: '+feature.properties.name);
        }
    }).addTo(mymap);

    var legend = L.control({position: 'bottomleft'});
        legend.onAdd = function (mymap) {
            var div = L.DomUtil.create('div', 'info legend');
            labels = ['<p style="font-size: 20px"><strong>Fuel Types</strong>'],
            categories = ['wind', 'solar', 'gas', 'hydro', 'coal', 'nuclear', 'biomass', 'oil'];

            for (var i = 0; i < categories.length; i++) {

                    div.innerHTML += 
                    labels.push(
                        '<span id="dot" style="background-color:' + getColor(categories[i]) + '"></span> ' +
                    (categories[i] ? capitalise(categories[i]) : '+'));
            }
            labels.push('</p>')
            div.innerHTML = labels.join('<br>');
        return div;
        };
    legend.addTo(mymap);
});