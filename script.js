let longLink = document.getElementById("long_link");
let shortLink = document.getElementById("short_link");
function createLink()
{
  if(longLink.value != "")
  {
    radomText(5);
  }
  else
  {
    shortLink.value = "";
  }
}

function radomText(length) 
{
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++)
    {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    shortLink.value = "www.mycslab.in/"+result;
}