const DEFAULT_WORDS_COUNT = 200;
const COUNT_DOWN_90 = 90;
const COUNT_DOWN_60 = 60;
const COUNT_DOWN_30 = 30;
const COUNT_DOWN_15 = 15;
const DEFAULT_COUNT_DOWN = COUNT_DOWN_60;
const DEFAULT_DIFFICULTY = "normal";
const CHAR_TOOLTIP_TITLE ="correct/incorrect/missing/extra\n extras are recorded even if deleted.";
const PACING_CARET = "caret";
const PACING_PULSE = "pulse";
const PACING_CARET_TOOLTIP = "type the word with a caret \"|\" , character by character.";
const PACING_PULSE_TOOLTIP = "type the word with a pulse \"____\", this helps improving wpm and your speed typing pace habit.";
const THEME = {
  label: "Piano",
    background: "linear-gradient(to bottom,  #000, #222)",
    text: "#FAF9F6",
    gradient: "linear-gradient(90deg, #000 0%, #222 100%)",
    title: "#f5f2e7",
    textTypeBox: "#555",
    stats: "#FAF9F6",
    fontFamily: "Rufina",
    textShadow: "0px -1px 0px rgba(0,0,0,0.3)"
}

export {
  DEFAULT_WORDS_COUNT,
  DEFAULT_COUNT_DOWN,
  COUNT_DOWN_60,
  COUNT_DOWN_30,
  COUNT_DOWN_15,
  COUNT_DOWN_90,
  DEFAULT_DIFFICULTY,
  CHAR_TOOLTIP_TITLE,
  PACING_CARET,
  PACING_PULSE,
  PACING_CARET_TOOLTIP,
  PACING_PULSE_TOOLTIP,
  THEME
};
