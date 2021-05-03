window.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector("#title"),
    author = document.querySelector("#author"),
    year = document.querySelector("#year"),
    btn = document.querySelector(".btn"),
    bookList = document.querySelector("#book-list");

  btn.addEventListener("click", (event) => {
    event.preventDefault();
    if (title.value == "" && author.value == "" && year.value == "") {
      alert("Please input your information");
    } else {
      // Create new Row
      const newRow = document.createElement("tr");

      // Create new Title
      const newTitle = document.createElement("td");
      newTitle.innerText = title.value;
      newRow.appendChild(newTitle);

      // Create new Author
      const newAuthor = document.createElement("td");
      newAuthor.innerText = author.value;
      newRow.appendChild(newAuthor);

      // Create new Year :)
      const dataYear = document.createElement("td");
      dataYear.innerText = year.value;
      newRow.appendChild(dataYear);

      //   Create Book List
      bookList.appendChild(newRow);

      title.value = "";
      author.value = "";
      year.value = "";
    }
  });
});
