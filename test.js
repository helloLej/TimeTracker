function solution(goods, boxes){
  let answer = goods.length
  const boxIndexs = Array.from(Array(boxes.length).keys())
  let boxesCopy = [...boxes]

  for(let i=0; i< goods.length; i++){
    if(boxes.filter(el => el >= goods[i]).length === 0){
      --answer
    }else {
      // boxesCopy.filter((el, i) => )
    }
  }
  return answer
}

solution([5,3,7], [3,7,6])
solution([1,2], [2,3,1])
solution([3,8,6], [5,6,4])