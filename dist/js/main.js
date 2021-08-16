const feedArray = [
  {
    "postID": "1",
    "postTitle": "A Kiwi",
    "postDescription": "this is a post about a kiwi",
    "bird": "Kiwi",
    "userID":"69",
    "comments": [{
      "commentID": "420",
      "commentDateD": "07",
      "commentDateM": "11",
      "commentDateY": "2020",
      "commentTimeH": "6",
      "commentTimeM": "9",
      "commentTimeS": "0",
      "userID": "420",
      "commentContents": "WOOOO",

      "commentLikes": [{
        "date": "07.11.2020",
        "time": "13.04.09",
        "userID": "420",

        "replies": [{
          "replyID": "420",
          "replyDateD": "07",
          "replyDateM": "11",
          "replyDateY": "2020",
          "replyTimeH": "6",
          "replyTimeM": "9",
          "replyTimeS": "0",
          "userID": "420",
          "replyContents": "WOOOO",
          "replyLikes": [{
            "date": "07.11.2020",
            "time": "13.04.09",
            "userID": "420"
          }]
        }]
  }
    ]}]},
    {
      "postID": "1",
      "postTitle": "A Kiwi",
      "postDescription": "this is a post about a kiwi",
      "bird": "Kiwi",
      "userID":"69",
      "comments": [{
        "commentID": "420",
        "commentDateD": "07",
        "commentDateM": "11",
        "commentDateY": "2020",
        "commentTimeH": "6",
        "commentTimeM": "9",
        "commentTimeS": "0",
        "userID": "420",
        "commentContents": "WOOOO",
  
        "commentLikes": [{
          "date": "07.11.2020",
          "time": "13.04.09",
          "userID": "420",
  
          "replies": [{
            "replyID": "420",
            "replyDateD": "07",
            "replyDateM": "11",
            "replyDateY": "2020",
            "replyTimeH": "6",
            "replyTimeM": "9",
            "replyTimeS": "0",
            "userID": "420",
            "replyContents": "WOOOO",
            "replyLikes": [{
              "date": "07.11.2020",
              "time": "13.04.09",
              "userID": "420"
            }]
          }]
    }
      ]}]}
  
  ]

function init() {
  displayFeed(feedArray);
  console.log("Init Triggered")
  }

function displayFeed(feedArray) {
    console.log("displayFeed Triggered")
    let html = "";
    for (const post of feedArray) {
      html += `<div class="post" data-id="${post.id}" style="background-image: url(../images/${post.postID}.png);">
				<div class="image" style="background-image: url(../images/${post.postID}.png);">
				</div>
				<div class="meta">
					<div class="metaPost">
						<div class="metaPostLeft">
							<div class="title">${post.postTitle}</div>
							<div class="subtitle">${post.postDescription}</div>
						</div>
						<div class="metaPostRight">
            <div class="subtitle">${post.bird}</div>
						</div>
					</div>
					<hr>
				</div>
			</div>`;
    }
    console.log("html appended")
    $("#content").html(html)

  }

init();
console.log("Init Trigger")

