var gameData = {
    clicks: 0,
    cpc: 1
  }

  var autoclicker = {
    amount: 0,
    price: 100
  }

function clicked() {
    gameData.clicks += gameData.cpc
    document.getElementById("clicks").innerHTML = gameData.clicks + " clicks"
}

function buycpc() {
    if (gameData.clicks >= 50) {
      gameData.clicks -= 50
      gameData.cpc += 1
      document.getElementById("cpc").innerHTML = "Upgrade cursor (Currently Level " + gameData.cpc + ") \nCost :50 clicks" 
      document.getElementById("clicks").innerHTML = gameData.clicks + " clicks"
      document.getElementById("cpcinfo").innerHTML = gameData.cpc + " clicks per click"
    }
  }

function buyautoclicker() {
    if (gameData.clicks >= autoclicker.price) {
      gameData.clicks -= autoclicker.price
      autoclicker.amount += 1
      autoclicker.price *= 2
      document.getElementById("autoclicker").innerHTML = "Upgrade auto clicker (Currently Level " + autoclicker.amount + ") \nCost :" + autoclicker.price + "clicks" 
      document.getElementById("clicks").innerHTML = gameData.clicks + " clicks"
      document.getElementById("autoclickerinfo").innerHTML = autoclicker.amount + " clicks per second"
    }
}

var mainGameLoop = window.setInterval(function() {
    gameData.clicks += autoclicker.amount
    document.getElementById("clicks").innerHTML = gameData.clicks + " clicks"
  }, 1000)