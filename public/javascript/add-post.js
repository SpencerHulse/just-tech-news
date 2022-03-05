async function newFormHandler(event) {
  event.preventDefault();

  /* Lesson recommended the below. Don't know why:
  const title = document.querySelector('input[name="post-title"]').value;
  const post_url = document.querySelector('input[name="post-url"]').value; */
  const title = document.getElementById("post-title").value.trim();
  const post_url = document.getElementById("post-url").value.trim();

  const response = await fetch("/api/posts", {
    method: "post",
    body: JSON.stringify({
      title,
      post_url,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);
