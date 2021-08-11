function perform()
{
    let checkBox1 = document.getElementById("check1").checked;
    let checkBox2 = document.getElementById("check2").checked;
    let checkBox3 = document.getElementById("check3").checked;
    
    let value = document.getElementById("key").value;
    if(value =="")
    {
        alert("Enter Keyword..!")
    }
    else
    {
        if(checkBox1 == false & checkBox2 == false & checkBox3 == false)
        {
            alert("Choose website");
        }
        else
        {
        let website = ["https://www.pexels.com/search/","https://unsplash.com/s/photos/","https://www.freepik.com/search?format=search&page=1&query="];
        if(checkBox1 == true)
        {
            // mobile
            // https://www.google.com/search?q=cars&hl=EN&tbm=isch&sxsrf=ALeKk03TFBUVw9lXg3IpUfj0NfpyshRFCw%3A1628652868865&source=hp&biw=1366&bih=669&ei=REUTYdHOMduMr7wP062euAU&oq=&gs_lcp=CgNpbWcQARgAMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnUABYAGDTE2gBcAB4AIABAIgBAJIBAJgBAKoBC2d3cy13aXotaW1nsAEK&
            // square
            // ?orientation=landscape 
            // portrait
            // squarish
            // 563492ad6f91700001000001ea60073dbbea44f696a2b615a8317be9
            chrome.tabs.create({url: website[0] + value, selected: true});
        }
        if(checkBox2 == true)
        {
            chrome.tabs.create({url: website[1] + value, selected: true});
        }
        if(checkBox3 == true)
        {
            chrome.tabs.create({url: website[2] + value, selected: true});
        }
        }

    }
    
        
    
}

document.addEventListener("DOMContentLoaded",function()
{
    document.getElementById("action").addEventListener("click", perform)
});


function forQr() {
    let qrtext = document.getElementById("text").value;
  
    if (qrtext == "") {
      document.getElementById("invQr").innerHTML = "Required field";
    } else {
      document.getElementById("invQr").innerHTML = "";
      var qrcode = new QRCode(document.getElementById("qrcode"), {
        correctLevel: QRCode.CorrectLevel.H,
      });
  
      function makeCode() {
        var elText = document.getElementById("text");
  
        if (!elText.value) {
          alert("Input a text");
          elText.focus();
          return;
        }
        qrcode.makeCode(elText.value);
  
        
      }
    }
    
    makeCode();
  }
  
  
  // function call trigger for get qr:
  
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("qrBut").addEventListener("click", forQr);
  });
  
  
  
  function pageReload() {
    location.reload();
  }
  
  // function call trigger for reset page , 
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("reset").addEventListener("click", pageReload);
  });
  