
import COMMON_WORDS from '../assets/Vocab/EnglishMostFrequentWords.json';
import { DEFAULT_WORDS_COUNT } from "../constants/Constants";
import { randomIntFromRange } from "./randomUtils";

const wordsGenerator = () => {

        const EnglishWordList = [];
        for (let i = 0; i < DEFAULT_WORDS_COUNT; i++) {
          const rand = randomIntFromRange(0, 550);
          EnglishWordList.push(COMMON_WORDS[rand]);
        }
        return EnglishWordList;
      
};




export { wordsGenerator};
