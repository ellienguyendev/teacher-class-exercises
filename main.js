function spinNumbers (){
  let result=Math.ceil(Math.random()*10)
  if (result<=1){
    return "2"
  }else if (result<=2){
    return "4"
  }else if (result<=3){
    return "6"
  }else if (result<=4){
    return "8"
  }else if (result<=5){
    return "10"
  }else if (result<=6){
    return "12"
  }else if (result<=7){
    return "14"
  }else if (result<=8){
    return "16"
  }else if (result<=9){
    return "18"
  }else if (result<=10){
    return "20"
  }
}

function spinExercises(){
  let result=Math.ceil(Math.random()*8)
  let arr = []
  if (result<=1){
    arr = []
    arr.push("Jumping Jacks")
    arr.push("jumpingjacks.png")
  }else if (result<=2){
    arr.push("Arm Circles")
    arr.push("armcircles.png")
  }else if (result<=3){
    arr.push("Squats")
    arr.push("squats.png")
  }else if (result<=4){
    arr.push("Toe Touches")
    arr.push("toetouches.png")
  }else if (result<=5){
    arr.push("Hop on 1 Foot")
    arr.push("hop.png")
  }else if (result<=6){
    arr.push("Sit Ups")
    arr.push("situps.png")
  }else if (result<=7){
    arr.push("Push Ups")
    arr.push("pushups.png")
  }else if (result<=8){
    arr.push("Sky Reaches")
    arr.push("skyreaches.png")
  }
  return arr
}

function spin(){
  let number=spinNumbers()
  let exercise=spinExercises()
  document.querySelector(".text").innerHTML= `Do ${number} ${exercise[0]}!`;
  document.querySelector(".image").src= exercise[1];
}

document.getElementById("randomize").onclick= spin;
