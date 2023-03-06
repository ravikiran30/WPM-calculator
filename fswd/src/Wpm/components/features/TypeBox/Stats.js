import React from "react";
import { Box } from "@mui/system";
import { Tooltip } from "@mui/material";
import { CHAR_TOOLTIP_TITLE } from "../../../constants/Constants";


import 'bootstrap/dist/css/bootstrap.min.css'
const Stats = ({
  status,
  wpm,
  countDown,
  countDownConstant,
  statsCharCount,
  rawKeyStrokes,
}) => {


  return (
    <><div style={{marginBottom:"0px"}}>
      <h3>{countDown} s </h3>
      {status === "finished" && (
        <Box display="flex" flexDirection="row" style={{ border: "2px solid white", display: 'flex', justifyContent: 'space-between', padding: "5px" }}>
          {status === "finished" && (<h3>WPM: {Math.round(wpm)}</h3>)}
          {status === "finished" && (
            <h4>Accuracy: {Math.round(statsCharCount[0])} %</h4>
          )}
          {status === "finished" && (
            <Tooltip
              title={
                <span style={{ whiteSpace: "pre-line" }}>
                  {CHAR_TOOLTIP_TITLE}
                </span>
              }
            >
              <h4>
                Char:{" "}
                <span className="correct-char-stats" style={{ margin: "10px" }}>{statsCharCount[1]}</span>/
                <span className="incorrect-char-stats" style={{ margin: "10px" }}>{statsCharCount[2]}</span>/
                <span className="missing-char-stats" style={{ margin: "10px" }}>{statsCharCount[3]}</span>/
                <span className="correct-char-stats" style={{ margin: "10px" }}>{statsCharCount[4]}</span>/
                <span className="incorrect-char-stats" style={{ margin: "10px" }}>{statsCharCount[5]}</span>
              </h4>
            </Tooltip>
          )}
          {status === "finished" && (
            
            <h4>
              Raw KPM: {Math.round((rawKeyStrokes / countDownConstant) * 60.0)}
            </h4>
           
          )}
          
        </Box>)}
        {
            status === "finished" && (
              <div style={{marginTop:"5px"}}>
                
                <p><b>Tips to Improve your Speed and Accuracy: -</b>Instead of typing with only your index fingers, you should be using every finger and keeping your fingers close to the home row of your keyboard when you are touch typing. Limiting your hand and finger movements will increase your wpm and reduce stress on your hands while you type.</p>
              </div>
            )
          }

</div>
    </>
  );
};

export default Stats;
