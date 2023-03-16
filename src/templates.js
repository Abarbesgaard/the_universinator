const line = "----------";

export const starNameDisplay = (name) => `${line}
New Star Name: ${name}
${line}`;

export const starSystemDisplay = ({ color, shape, distance, signal, newRegion }) => `${line}
New Star Discovered
${line}
Type: ${color} (${shape})
Distance: ${distance} units away
Signal detected: ${signal}
New region: ${newRegion}
${line}`;

export const systemRaceDisplay = (race) => `${line}
New System Race Discovered: ${race}
${line}`;
