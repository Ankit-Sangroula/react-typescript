import type { JSX } from "react";

type ArialLiveStatusProps = {
  currentWord: string;
  lastGuessedLetter: string;
  guessedLetters: string;
  numGuessesLeft: string;
};
export default function AriaLiveStatus({
  currentWord,
  lastGuessedLetter,
  guessedLetters,
  numGuessesLeft,
}: ArialLiveStatusProps): JSX.Element {
  return (
    <section className="sr-only" aria-live="polite" role="status">
      <p>
        {currentWord.includes(lastGuessedLetter)
          ? `Correct! The letter ${lastGuessedLetter} is in the word.`
          : `Sorry, the letter ${lastGuessedLetter} is not in the word.`}
        You have {numGuessesLeft} attempts left.
      </p>
      <p>
        Current word:{" "}
        {currentWord
          .split("")
          .map((letter:string):string =>
            guessedLetters.includes(letter) ? letter + "." : "blank.",
          )
          .join(" ")}
      </p>
    </section>
  );
}
