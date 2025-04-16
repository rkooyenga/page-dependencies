!(async () => {
  /* script by Ray Kooyenga 2024 use however you like just tag my name and site raykooyenga.com if you make something cool */
  const bkjsbodylight = `color: rgb(26,26,26);
background: linear-gradient(90deg,  rgba(235,235,255), rgba(255, 255, 255));
box-shadow: 2.5px 5px .5px rgba(0,0,0, 0.85);
box-shadow: 2.5px 5px .5px rgb(51,51,51);
border: 1px inset rgba(72,72,72,0.5);`;
  const bkjsbodydark = `font-family:'Anton';background:  radial-gradient(50% 50% at top center, rgba(0, 0, 0, 0.66), rgb(38, 38, 38)), linear-gradient(180deg, rgb(255, 255, 255), rgb(38, 38, 38));
box-shadow: .036cm .14cm .1cm rgba(0,0,0, 0.65);
color: rgb(250,250,250);
border: 1.6px inset rgba(72,72,72,0.5);`;
  const bkjsbuttonprops = `position: fixed;
padding: 10px 15px;
font-size: 16px;
cursor: pointer;
border-radius:0px;`;
  /* swap color here light or dark*/
  const bkjsbuttonbg = bkjsbodydark;
  const bkjsbodybg = bkjsbodydark;
  const bkjsbuttoncss = bkjsbuttonprops + bkjsbuttonbg;
  const existingOverlay = document.getElementById("file-reference-overlay");
  if (existingOverlay) {
    existingOverlay.remove();
  }
  const references = [];
  document.querySelectorAll('link[rel="stylesheet"]').forEach((link) => {
    if (link.href) {
      references.push({
        type: "CSS",
        path: link.href,
        code: `<link rel="stylesheet" href="` + link.href + `">`
      });
    }
  });
  document.querySelectorAll("script").forEach((script) => {
    if (script.src) {
      references.push({
        type: "JavaScript",
        path: script.src,
        code: `<script src="${script.src}"></script>`
      });
    }
  });

  document
    .querySelectorAll('link[rel="preload"][as="font"]')
    .forEach((link) => {
      if (link.href) {
        references.push({
          type: "Font",
          path: link.href,
          code: `<link rel="stylesheet" href="${link.href}">`
        });
      }
    });

  const overlay = document.createElement("div");
  overlay.id = "file-reference-overlay";
  overlay.style.cssText =
    `display:contents;font-family:'Anton','Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
backdrop-filter: blur(4px);
z-index: 9999999;
overflow-y: scroll;
padding: 20px;
box-sizing: border-box;
color: rgb(255,255,255);
display: block;
font-size: 16px;` + bkjsbodybg;

  const content = document.createElement("div");
  content.id = "mainpanel";
  content.style.cssText =
    `padding: 16px;
border-radius: 10px;
min-width:380px
max-width: 900px;
margin: 1px auto;` + bkjsbodybg;

  const closeButton = document.createElement("button");
  closeButton.textContent = "Close";
  closeButton.style.cssText = bkjsbuttoncss + `top: 2.5rem;right: 2.5rem;`;
  closeButton.onclick = () => overlay.remove();
  content.appendChild(closeButton);

  const title = document.createElement("h2");
  title.textContent = "SOURCES";
  title.style.cssText = `text-align:center;padding:4px;font-weight:800;font-size:40px;text-shadow: 6px 6px 1px #333;
`;
  content.appendChild(title);
  const downloadButton = document.createElement("button");
  downloadButton.textContent = "Download";
  downloadButton.style.cssText = bkjsbuttoncss + `top: 2.5rem;left: 2.5rem;`;
  downloadButton.onclick = () => {
    const textContent = references.map((ref) => ref.code).join("");
    const blob = new Blob([textContent], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "file-references.txt";
    link.click();
  };
  content.appendChild(downloadButton);

  const table = document.createElement("table");
  table.style.cssText =
    "margin:35px auto; width: 100%; border-collapse: collapse;";
  table.id = "bkjstable";

  const thead = document.createElement("thead");
  thead.innerHTML = `<style>button:active {
 transform: rotateX(-15deg) translateY(2px) scale(0.98);
 outline: none;
 box-shadow:  0 1px 1px rgba(0,0,0, 0.85); 

}
  #bkjstable td,#bkjstable th {
    border: 1px solid #ccc;
    padding: 8px;
    background-color: transparent;
    color:whitesmoke;
  }
  #bkjstable th {
font-weight: bold;  font-size: 23px;
  }

  #bkjstable tr,#bkjstable td {
    font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 8px;font-weight:normal;
    border: 1px solid #ccc;
  }
  #bkjstable button { ${bkjsbodydark} }</style>
<tr>
  <th>Type</th>
  <th>Path</th>
  <th>Open File</th>
  <th>Copy Tag</th>
</tr>
`;
  table.appendChild(thead);
  const tbody = document.createElement("tbody");
  references.forEach((ref, i) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td style="padding: 8px;">${ref.type}</td>
<td style="word-break: break-all;">${ref.path}</td>
<td style="padding: 8px; text-align: center;">
  <button data-id="${i}" style="padding: 5px 10px; cursor: pointer;">Open</button>
</td>
<td style="padding: 8px; text-align: center;">
  <button data-id="${i}" style="padding: 5px 10px; cursor: pointer;">Copy</button>
</td>
`;
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  content.appendChild(table);
  overlay.appendChild(content);
  document.body.appendChild(overlay);

  document.querySelectorAll("button[data-id]").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = parseInt(e.target.getAttribute("data-id"));
      const ref = references[id];

      if (e.target.textContent === "Open") {
        window.open(ref.path);
      } else if (e.target.textContent === "Copy") {
        const textarea = document.createElement("textarea");
        textarea.value = ref.code;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        alert("Code block copied to clipboard!");
      }
    });
  });
})();
