import { useState,useCallback } from "react";
import Result from "./Result";
function correct(str) {
    const stack = [];
    const pairs = {
      "(": ")",
      "{": "}",
      "[": "]"
    };
    let goodPairs = 0;
    let badPairs = 0;
    for (let i = 0; i < str.length; i++) {
      if (Object.keys(pairs).includes(str[i])) {
        stack.push(str[i]);
      } else {
        const opened = stack[stack.length - 1];
        const closed = pairs[opened];
        if (closed === str[i]) {
          stack.pop();
          goodPairs = goodPairs + 2;
        } else {
          badPairs++;
        }
      }
    }
    if (stack.length) {
        badPairs = badPairs + stack.length;
    }
    return [goodPairs,badPairs]
  }
export default function Parentheses(){
    const [goodPairs,setGoodPairs] = useState(0)
    const [badPairs,setBadPairs] = useState(0)
    const [targetStr,setTargetStr] = useState()
    const checkBrackets = useCallback(() => {
    const [goodPairsLocal,badPairsLocal] = correct(targetStr);
    setGoodPairs(goodPairsLocal);
    setBadPairs(badPairsLocal);
    },[targetStr,setBadPairs,setGoodPairs])
    return(
        <div className="Parentheses">
            <p>Задание №1</p>
            <input onChange={(e) => setTargetStr(`${e.target.value}`)}/>
            <button onClick={checkBrackets}>Проверить</button>
            <Result goodPairs={goodPairs} badPairs={badPairs}/>
        </div>
    )
}