import {useEffect, useState} from "react";

export default function useSearch(row: number, col: number){


  const [toggle, setToggle] = useState(1)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [stack, setStack] = useState(Array<string>())
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [visited, setVisited] = useState(new Set<string>())
  const [dfs, setDfs] = useState(false)
  const [time, setTime] = useState(100)
  const [twoPoints, setTwoPoints] = useState(false)


  const particleArray = []

  for (let i = 0; i < row; i++){

    const row = []

    for (let j = 0; j < col; j++){
      row.push([i, j])
    }
    particleArray.push(row)
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void=>{
    const key = event.currentTarget.getAttribute("data-key")
    const [i, j] = key!.split("-");
    stack.push(`${i}-${j}`)
    setToggle((toggle)=> toggle + 1)
  }

  const refresh = () => {
    setToggle((toggle)=> toggle + 1)
    setStack([])
    setVisited(new Set<string>())
  }



  function isValid(r: number, c: number){
    return (0 <= r) && (r < row) && (0 <=c) && (c < col);
  }

  const directions = [ [0, -1], [-1, 0], [0, 1], [1, 0]];

  useEffect( () => {

    let node: string | undefined;
    if (dfs){
      node = stack.pop()
    }else{
      node = stack.shift()
    }

    if (!node){
      return
    }

    const [i, j] = node.split("-");
    visited.add(i+"-"+j);

    for (const dirc of directions){
      const new_row : number = Number(i) + dirc[0];
      const new_col: number = Number(j) + dirc[1];
      if (isValid(new_row, new_col) && !visited.has(`${new_row}-${new_col}`) && !stack.includes(new_row.toString() + "-" + new_col.toString())){
        stack.push(new_row.toString() + "-" + new_col.toString())
      }
    }

    if (stack.length >= 0){
      setTimeout(()=>{setToggle((toggle)=> toggle + 1)}, time);
    }

  }, [toggle]);

  return {
    particleArray,
    handleClick,
    stack,
    visited,
    toggle,
    setToggle,
    dfs,
    setDfs,
    time,
    setTime,
    twoPoints,
    setTwoPoints,
    refresh
  }

}