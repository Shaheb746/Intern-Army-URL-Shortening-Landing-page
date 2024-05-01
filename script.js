
async function shortenURL () {
    const url = document.getElementById("url").value;
    const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
    console.log(response);

    if (response.ok)
    {
        const data = await response.text();
        document.getElementById('result').innerHTML = ` 
        Your shortened URL : <hr/> <a href = "${data}" target="_blank">${data}</a>`;
    }
    else {
        document.getElementById('result').innerHTML = "Error in Shortening URL";
    }

}