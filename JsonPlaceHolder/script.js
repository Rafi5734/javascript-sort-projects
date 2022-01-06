const CardId = document.getElementById("cardId");
const MainCard = document.getElementById("main-card");
const CardTitle = document.getElementById("card-title");
const cardBadge = document.getElementById("card-badge");
const dataFetch = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((data) => {
            data.map((d) => {
                // console.log(d.completed === false);
                const newDiv = document.createElement("div");
                const badgeDiv = document.createElement("div");
                newDiv.innerHTML = `
                <div class="card mt-5" id="cardId" style="width: 22rem">
                    <div class="card-body">
                        <h5 class="card-title" id="card-title">${d.title}</h5>
                        <h5>
                            <span class="badge bg-secondary" id="card-badge"
                                >${d.completed}</span
                            >
                        </h5>
                    </div>
                </div>
                `;

                MainCard.appendChild(newDiv);
            });
        });
};
dataFetch();
