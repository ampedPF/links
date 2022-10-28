window.onload = function() {
    // console.log(links);
    var linksEl = document.getElementById("links");
    links.forEach(link => {
        var linkEl = document.createElement("a");
        linkEl.classList = "link";
        linkEl.href = link.href;
        linkEl.target = "_blank";

        var linkImage = document.createElement("i");
        linkImage.classList = link.icon;
        linkEl.appendChild(linkImage);

        var linkText = document.createElement("p");
        linkText.textContent = link.text;
        linkEl.appendChild(linkText);

        linksEl.appendChild(linkEl);
    });
}