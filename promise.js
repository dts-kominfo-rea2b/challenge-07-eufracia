const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme

const countData = (emotion, getEmotion) => {
  return new Promise((resolve, reject) => {
    
    if (getEmotion === undefined) {
      reject("Emotion is undefined");
    } else {
      let count = 0;
      for (let i = 0; i < emotion.length; i++) {
        if (getEmotion === emotion[i]["hasil"]) {
          count++;
        }
      }
      resolve(count);
    }
  });
};

const promiseOutput = async (getEmotion) => {
  const countIXX = await promiseTheaterIXX().then((hasilSetelahMenonton) =>
    countData(hasilSetelahMenonton, getEmotion)
  );
  const countVGC = await promiseTheaterVGC().then((hasilSetelahMenonton) =>
    countData(hasilSetelahMenonton, getEmotion)
  );
  return countIXX + countVGC;
};
module.exports = {
  promiseOutput,
};
