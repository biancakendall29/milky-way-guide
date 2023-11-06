import { Planets } from "./types";

export const InitialPlanets: Planets = {
  sun: { url: "", size: 0, dist: 0 },
  mercury: { url: "", size: 0, dist: 0 },
  venus: { url: "", size: 0, dist: 0 },
  earth: { url: "", size: 0, dist: 0 },
  mars: { url: "", size: 0, dist: 0 },
  jupiter: { url: "", size: 0, dist: 0 },
  saturn: { url: "", size: 0, dist: 0 },
  uranus: { url: "", size: 0, dist: 0 },
  neptune: { url: "", size: 0, dist: 0 },
  pluto: { url: "", size: 0, dist: 0 },
};

export const SIZE_FACTOR = 3000;
export const DISTANCE_FACTOR = 4;

const SUN = {
  url: "GSFC_20171208_Archive_e000790",
  size: 1 * SIZE_FACTOR * 0.5,
};
const MERCURY = {
  url: "PIA15164",
  size: 0.003504 * SIZE_FACTOR,
  dist: 0.39 * DISTANCE_FACTOR,
};
const VENUS = {
  url: "PIA00104",
  size: 0.008691 * SIZE_FACTOR,
  dist: 0.72 * DISTANCE_FACTOR,
};
const EARTH = {
  url: "PIA18033",
  size: 0.009149 * SIZE_FACTOR,
  dist: 1 * DISTANCE_FACTOR,
};
const MARS = {
  url: "PIA03276",
  size: 0.004868 * SIZE_FACTOR,
  dist: 1.52 * DISTANCE_FACTOR,
};
const JUPITER = {
  url: "PIA00343",
  size: 0.100398 * SIZE_FACTOR,
  dist: 5.2 * DISTANCE_FACTOR,
};
const SATURN = {
  url: "PIA18282",
  size: 0.083626 * SIZE_FACTOR,
  dist: 9.54 * DISTANCE_FACTOR,
}; // PIA18295
const URANUS = {
  url: "PIA01488",
  size: 0.036422 * SIZE_FACTOR,
  dist: 19.2 * DISTANCE_FACTOR,
};
const NEPTUNE = {
  url: "PIA01492",
  size: 0.035359 * SIZE_FACTOR,
  dist: 30.06 * DISTANCE_FACTOR,
};
const PLUTO = {
  url: "PIA19708",
  size: 0.0001704 * SIZE_FACTOR,
  dist: 39 * DISTANCE_FACTOR,
};

export const PlanetUrls = [
  { sun: SUN },
  { mercury: MERCURY },
  { venus: VENUS },
  { earth: EARTH },
  { mars: MARS },
  { jupiter: JUPITER },
  { saturn: SATURN },
  { uranus: URANUS },
  { neptune: NEPTUNE },
  { pluto: PLUTO },
];
