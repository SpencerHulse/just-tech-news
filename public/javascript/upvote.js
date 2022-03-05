async function upvote(event) {
  event.preventDefault();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch("/api/posts/upvote", {
    method: "put",
    body: JSON.stringify({ post_id: id }),
    headers: { "content-type": "application/json" },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document.querySelector(".upvote-button").addEventListener("click", upvote);
