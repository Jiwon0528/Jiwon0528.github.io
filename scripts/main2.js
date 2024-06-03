import translate from "translate";

translate.engine = "Google";
translate.key = process.env.Google_KEY;

const text = await translate ("");
console.log(text);