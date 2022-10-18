function getPrices() {
  return {
    prodTypes: [100, 150, 200],
    optionPrices: {
      option2: 250,
      option3: 400
    },
    secureOptions: {
      check1: 500,
      check2: 600
    }
  };
}

function totalSum(v) {
  let s = document.getElementsByName("priceRate");
  let select = s[0];

  let radioBtn = document.getElementById("optionPrice");
  radioBtn.style.display = ((select.value === "1" || select.value === "3") ? "none" : "block");



  let checkBx = document.getElementById("deluxe");
  checkBx.style.display = (select.value === "3" ? "block" : "none");
  let price = 0;

  let prices = getPrices();
  let priceIndex = parseInt(select.value) - 1;
  if (priceIndex >= 0) {
    price = prices.prodTypes[priceIndex];
  }

  if (select.value === "2") {
    let radio = document.getElementsByName("optionPrice");
    radio.forEach(function (radio) {
      if (radio.checked) {
        let optionPrice = prices.optionPrices[radio.value];
        if (optionPrice !== undefined) {
          price += optionPrice;
        }
      }
    });
  }
  if (select.value === "3") {
    let checkbox = document.getElementsByName("deluxe");
    checkbox.forEach(function (checkbox) {
      if (checkbox.checked) {
        let checkboxPrice = prices.secureOptions[checkbox.value];
        if (checkboxPrice !== undefined) {
          price += checkboxPrice;
        }
      }
    });
  }

  let forbiddenSymbols = /^(?!(0))\d+$/;
  let total = document.getElementById("result");
  if (v.match(forbiddenSymbols) === null) {
    total.innerHTML = "Число введено некорректно";
  }
  else {
    total.innerHTML = + v * price + " рублей";
  }

}




window.addEventListener("DOMContentLoaded", function (event) {
  let radio = document.getElementById("optionPrice");
  radio.style.display = "none";

  let checkbox = document.getElementById("deluxe");
  checkbox.style.display = "none";

  let v = document.getElementById("field");
  v.addEventListener("input", function (event) {
    totalSum(v.value);
  });

  let s = document.getElementsByName("priceRate");
  let select = s[0];
  select.addEventListener("change", function (event) {
    let target = event.target;
    totalSum(v.value);
  });

  let radioBtn = document.getElementsByName("optionPrice");
  radioBtn.forEach(function (radio) {
    radio.addEventListener("change", function (event) {
      let r = event.target;
      totalSum(v.value);
    });
  });


  let checkboxBtn = document.getElementsByName("deluxe");
  checkboxBtn.forEach(function (checkbox) {
    checkbox.addEventListener("change", function (event) {
      let c = event.target;
      totalSum(v.value);
    });
  });

});