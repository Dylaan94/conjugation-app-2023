import getConjugations from "@/utils/getConjugations";
import getPastForm from "@/utils/getConjugations";
import { VerbEndings } from "@/utils/types";

export default async function Home() {
  const pageNumber: number = 5;
  const promises = [];
  const dataArray: VerbEndings[] = [];

  for (let i = 1; i < pageNumber; i++) {
    promises.push(
      fetch(
        `https://jisho.org/api/v1/search/words?keyword=%23verb%20%23jlpt-n5&page=${i}`
      ).then((res) =>
        res.json().then((data) => {
          const verbData = data.data.map((item: any) => {
            return {
              japanese: item.japanese[0].word,
              english: item.senses[0].english_definitions[0],
              dictionaryForm: item.japanese[0].reading,
              verbType: item.senses[0].parts_of_speech[0],
              ...getConjugations(
                item.japanese[0].reading,
                item.senses[0].parts_of_speech[0]
              ),
            };
          });
          dataArray.push(...verbData);
        })
      )
    );
  }

  Promise.all(promises).then(() => {
    console.log(dataArray);
  });

  // const data = await res.json();

  return (
    <>
      <main className=" w-full "></main>
    </>
  );
}
