const editHandler = async (event) => {
  event.preventDefault();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const title = document.getElementById("post-title").value.trim();

  const response = await fetch(`/api/posts/${id}`, {
    method: "put",
    body: JSON.stringify({
      title,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector(".edit-post-form")
  .addEventListener("submit", editHandler);
