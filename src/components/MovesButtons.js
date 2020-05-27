import React from "react";
import getMovesData from "../utils/getMovesData";

function MovesButtons({
  pokemon,
  randomPokemon,
  pokemonAttack,
  SetPokemonAttack,
  damage,
  SetDamage,
}) {
  const [myMoves, setMyMoves] = React.useState([]);
  const [vsMoves, setVsMoves] = React.useState([]);

  React.useEffect(() => {
    getMyMoves();
    getVsMoves();
  }, []);

  async function getMyMoves() {
    let moveData = await Promise.all(
      pokemon.moves.map(async (move) => {
        let moveResponse = await getMovesData(move);
        return moveResponse;
        // console.log(moveResponse);
      })
    );
    setMyMoves([...myMoves, moveData]);
  }

  async function getVsMoves() {
    let vsData = await Promise.all(
      randomPokemon.moves.map(async (move) => {
        let vsResponse = await getMovesData(move);
        return vsResponse;
        // console.log(moveResponse);
      })
    );
    setVsMoves([...vsMoves, vsData]);
  }

  console.log(myMoves);

  console.log(myMoves.length);
  console.log(typeof vsMoves);

  // randomPokemon.moves.map((move) =>
  //   getMovesData(move).then(createMovesData)

  // })

  //   function createMovesData(data) {
  //     if (!data.power) data.power = 10;

  //     const MovesData = {
  //       moveName: data.name,
  //       type: data.damage_class.name,
  //       power: data.power > 30 ? data.power / 5 : data.power,
  //     };
  //     return MovesData;
  //   }

  return (
    <>
      <button className="actionBtn">{}</button>
      <button className="actionBtn"></button>
      <button className="actionBtn"></button>
    </>
  );
}

export default MovesButtons;
