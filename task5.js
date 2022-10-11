window.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
    function click1() {
        let p = document.getElementById("price").value;
        let q = document.getElementById("quantity").value;
        let r = document.getElementById("result");
        let forbiddenSymbol=/^(?!(0))\d+$/;
        if(p.match(forbiddenSymbol)===null || q.match(forbiddenSymbol)===null)
        {
          window.alert("В поле введены недопустимые символы или начинается с нуля");
          r.innerHTML="Ошибка";
        }
        else
        {
          r.innerHTML = parseInt(p) * parseInt(q);
        }
      }
      let b = document.getElementById("button1");
      b.addEventListener("click", click1);
    });
