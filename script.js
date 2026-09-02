const news = [
    {
        title: "കേരളത്തിലെ പ്രധാന വാർത്തകൾ",
        category: "കേരളം"
    },
    {
        title: "രാജ്യത്തെ പ്രധാന സംഭവവികാസങ്ങൾ",
        category: "ദേശീയം"
    },
    {
        title: "കായിക ലോകത്തെ പുതിയ വാർത്തകൾ",
        category: "കായികം"
    }
];


// ================= BREAKING NEWS =================

let tickerIndex = 0;

function changeTicker() {

    const ticker = document.getElementById("tickerText");

    ticker.textContent = news[tickerIndex].title;

    tickerIndex++;

    if (tickerIndex >= news.length) {
        tickerIndex = 0;
    }
}

setInterval(changeTicker, 3000);

changeTicker();


// ================= SEARCH =================

function searchNews() {

    const searchText =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const cards =
        document.querySelectorAll(".news-card");

    cards.forEach(card => {

        const title =
            card.querySelector("h2")
                .textContent
                .toLowerCase();

        if (title.includes(searchText)) {
            card.style.display = "grid";
        } else {
            card.style.display = "none";
        }

    });

}


// ================= LOAD MORE =================

function loadMore() {

    alert("More news will be loaded here.");

}