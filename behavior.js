document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#input");

  input.addEventListener("click", () => {
    createActionSheet();
  });
});

function createActionSheet() {
  const sheet = document.createElement("div");
  sheet.id = "action-sheet";

  const ul = document.createElement("ul");
  ul.className = "action-sheet__list";
  sheet.append(ul);

  const input = document.querySelector("#input");

  for (const n of [1, 2, 3, 4, 5]) {
    const li = document.createElement("li");

    const button = document.createElement("button");
    const text = `Option ${n}`;
    button.innerText = text;
    button.className = "action-sheet__button";
    button.addEventListener("click", () => {
      input.value = text;
      destroyActionSheet();
    });

    li.append(button);
    ul.append(li);
  }

  createOverlay();
  document.body.append(sheet);
}

function createOverlay() {
  const overlay = document.createElement("div");
  overlay.id = "overlay";
  overlay.addEventListener("click", destroyActionSheet);

  document.body.append(overlay);
}

function destroyActionSheet() {
  const sheet = document.querySelector("#action-sheet");
  const overlay = document.querySelector("#overlay");
  document.body.removeChild(overlay);
  document.body.removeChild(sheet);
}
