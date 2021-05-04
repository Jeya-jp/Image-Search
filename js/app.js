function perform()
{
    let checkBox1 = document.getElementById("check1").checked;
    let checkBox2 = document.getElementById("check2").checked;
    
    let value = document.getElementById("key").value;
    let website = ["https://www.pexels.com/search/","https://unsplash.com/s/photos/"];
    
   
        if(checkBox1 == true)
        {
            chrome.tabs.create({url: website[0] + value, selected: true});
            // window.open(website[0] + value);
            // alert("0")
        }
        if(checkBox2 == true)
        {
            // alert("1")
            // window.open(website[1] + value);
            chrome.tabs.create({url: website[1] + value, selected: true});
        }

        
    
}

document.addEventListener("DOMContentLoaded",function()
{
    document.getElementById("action").addEventListener("click", perform)
});