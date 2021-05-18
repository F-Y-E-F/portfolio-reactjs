import React, { useState } from "react";
import {
  CSSGrid,
  layout,
  measureItems,
  makeResponsive,
} from "react-stonecutter";
import AppTile from "./AppTile";
import styles from "./AppsGrid.module.css";

const FlexibleGrid = makeResponsive(measureItems(CSSGrid), {
  maxWidth: 1100,
  minPadding: 30,

});

const AppsGrid = () => {
  const [state, setstate] = useState(["A", "B", "C", "D", "E", "F"]);
  return (
    <div>
      <div className={styles.gridWrapper}>
        <FlexibleGrid
          component="ul"
          columns={3}
          columnWidth={300}
          gutterWidth={30}
          gutterHeight={30}
          layout={layout.pinterest}
          duration={400}
          easing="ease-out"
        >
          {state.map((datum) => (
            <li key={datum} itemHeight={300}>
              <AppTile orangeText={datum} whiteText={datum} />
            </li>
          ))}
        </FlexibleGrid>
      </div>
      <div>
        <button
          onClick={() => {
            setstate(["D", "F"]);
          }}
        >
          KLIKEJ MNIE CWELU
        </button>

        <button
          onClick={() => {
            setstate(["A", "B", "C", "D", "E", "F"]);
          }}
        >
          KLIKEJ MNIE CWELU
        </button>
      </div>
    </div>
  );
};

export default AppsGrid;
