# Gameplay Flow Overview

1. Player begins the game
2. Intro message -> goal is to explore
3. Greetings from the crew
  - Quick Intros from each person
  - Science, Medical, Engineering, Tactical
4. Good luck & have fun
5. User prompt -> shipinfo
  - displays current state of the ship
6. Assign crew members to probes to maximize results efficiency
  - Science gives bonus to geologic data
  - Medical gives bonus to demographic data
  - Engineering gives bonus to signal detection (2 in 20)
  - Tactical gives bonus to conflict data
7. User prompt -> scanproximity
  - returns list of nearest stars and their names
8. User prompt -> scansystem [name/id] - 10
  - Uses 10 probes (of Infinity)
  - Each probe has:
    - 2 in 20 chance of being destroyed
    - 3 in 20 chance of geology, 4 with bonus
    - 3 in 20 chance of demography, 4 with bonus
    - 3 in 20 chance of conflict data, 4 with bonus
    - 1 in 20 chance of signal detection, 2 with bonus
    - 4-8 in 20 chance of returning without any data
  - Returns report on the specified system
    - Report will include what probes find, but all data will be generated and stored regardless
9. User prompt -> travel [name/id]
  - Ship enters the new system
  - If alien intelligence present, display message depending on conflict  level
10. User prompt -> scanplanet [name/id] - 5
  - Uses five probes
  - Same probability table as before