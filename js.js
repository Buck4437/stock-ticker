var namelist = ["Antinology","Infinifection","Eternal Light","Galaxia","Duplicanti","Dimensional Explorer","Techyon","Realistic","Celestar","ERCGDM","NRG+","Looty Box","Symbolic","Minisofa","IDEAL","Appange","Goggles","Interval","Newstar","HeavyPellet","Marsa","Zoology","Photoric","Jacfoz","Orism","EDIK","Fision","Gamma","Fractiled","Imnesia","Fermic","The Automizers"]
var price = 0
//I am copying this from stackflow because i cannot code
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
function generate(){
  shuffle(namelist)
  for(i=1;i<=3;i++){
      document.getElementById("company"+i).innerHTML = namelist[i-1]
      price = Math.floor(Math.random()*11)
      price = (price/100).toFixed(2);
      if (price!=0){
        neg = Math.floor(Math.random()*2)
        if(neg == 1){
          price = "-" + price + "  ▼"
          document.getElementById("price"+i).style = "color:red"
        }
        else{
          price = "+" + price + "  ▲"
          document.getElementById("price"+i).style = "color:green"
        }
      }
      else{
        price = " " + price + "  ◄►"
        document.getElementById("price"+i).style = "color:gold"
      }
      document.getElementById("price"+i).innerHTML = price
  }
}
generate()

$(function () {
  $('.marquee').marquee({
      speed: window.innerWidth/10
  }).bind('finished', function(){
	  generate()
	})
})
