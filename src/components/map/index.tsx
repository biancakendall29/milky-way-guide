import { FC, useEffect, useState } from "react";
import {
  container,
  magnifyer,
  magnifyerGlass,
  magnifyerHandle,
  magnifyerLabel,
  planetContainer,
  planetImg,
} from "./map.css";
import { Planets } from "./types";
import { InitialPlanets, PlanetUrls } from "./constants";
import { getImageUrl } from "./utils";
import { assignInlineVars } from "@vanilla-extract/dynamic";

const Map: FC = () => {
  const [planets, setPlanets] = useState<Planets>(InitialPlanets);

  useEffect(() => {
    let isMounted = true;

    PlanetUrls.forEach((planet) => {
      Object.entries(planet).map((entry) => {
        getImageUrl(entry[1].url).then((url) => {
          if (isMounted)
            setPlanets((prev) => {
              return {
                ...prev,
                [entry[0]]: { url, size: entry[1].size, dist: entry[1].dist },
              };
            });
        });
      });
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <div className={container}>
        {Object.entries(planets).map((planet) => {
          return (
            <div
              className={planetContainer}
              key={planet[0]}
              style={assignInlineVars({
                width: planet[1].size + 6,
                height: planet[1].size,
                marginLeft: `${planet[1].dist + 6}px`,
              })}
            >
              <img
                key={planet[0]}
                className={planetImg}
                src={planet[1].url}
                alt={planet[0]}
                width={planet[1].size}
                height={planet[1].size}
              />
              {planet[0] === "pluto" && (
                <div className={magnifyer}>
                  <label className={magnifyerLabel}>x100</label>
                  <span className={magnifyerGlass} />
                  <span className={magnifyerHandle} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Map;
