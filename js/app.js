function perform()
{
    let checkBox1 = document.getElementById("check1").checked;
    let checkBox2 = document.getElementById("check2").checked;
    
    let value = document.getElementById("key").value;
    if(value =="")
    {
        alert("Enter Keyword..!")
    }
    else
    {
        if(checkBox1 == false & checkBox2 == false)
        {
            alert("Choose website");
        }
        else
        {
        let website = ["https://www.pexels.com/search/","https://unsplash.com/s/photos/"];
        if(checkBox1 == true)
        {
            chrome.tabs.create({url: website[0] + value, selected: true});
        }
        if(checkBox2 == true)
        {
            chrome.tabs.create({url: website[1] + value, selected: true});
        }
        }

    }
    
        
    
}

document.addEventListener("DOMContentLoaded",function()
{
    document.getElementById("action").addEventListener("click", perform)
});


