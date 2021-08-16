const feedArray =[
  {
    "id": "0",
    "title": "A Kiwi",
    "description": "this is a post about a kiwi",
    "bird": "kiwiID"
  }
]

function init() {
  displayProducts(feedArray);
  console.log("Init Triggered")
  
}

function displayFeed(feedArray) {
  console.log("displayFeed Triggered")
  let html = "";
  for (const post of feedArray) {
    html += `
          <div class="thumbnail" data-id="${post.id}">
          <img src="${post.id}.png">
          <div>
            <h3>${post.title}</h3>
            <p>$${post.bird}</p>
            <p>${post.description}</p>
          </div>
        </div>`;
  }
  console.log("html appended")
  $("#displayFeed").html(html)

}

init();
console.log("Init Trigger")

