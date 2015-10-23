req = new XMLHttpRequest();

function parse()
{
	req.open("GET", "data.json", true);
	req.onreadystatechange = function getdata()
	{
		if (req.readyState == 4)
		{
			console.log("Got info: success");
			data = req.responseText;
			msgs = JSON.parse(data);
			elem = document.getElementById("messages");
			for (i = 0; i < msgs.length; i++)
			{
				elem.innerHTML += '<div id="id' + i +'"><p>' + msgs[i]["content"]
				+ '<br /><div id="user">' + msgs[i]["username"] + "</div></p></div>";
			}
		}

		else
			console.log("Not yet successful");
	};

	req.send(null);
}