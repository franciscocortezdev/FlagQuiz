import { getCodeCountrys } from "../../API/getCodeCountrys";
import { useState, useEffect } from "react";
import "./Options.css";
import { LoadOption } from "../Loaders/LoadOption";

export function Options({ code, resC, clickOptions }) {
  const [codeP, setcodeP] = useState();

  useEffect(() => {
    getCodeCountrys(code).then((data) => {
      setcodeP(data[0].name.official);
    });
  }, [code]);

  if (codeP === undefined) {
    return <LoadOption />;
  }

  return (
    <div id={codeP} className="option" onClick={(e) => clickOptions(resC, e)}>
      <p className="option_P">{codeP}</p>
    </div>
  );
}
