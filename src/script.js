import {calculateTip} from "./utils/calculateTips";

export const  run = () => {
    document.getElementById("totalTip").style.display = "none";
    document.getElementById("each").style.display = "none";

    document.getElementById("calculate").onclick = function(){
        calculateTip();
    };
}
