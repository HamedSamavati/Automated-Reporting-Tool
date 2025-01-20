const { jsPDF } = window.jspdf;

document
  .getElementById("generate-report")
  .addEventListener("click", (event) => {
    event.preventDefault();
    const title = document.getElementById("report-title").value;
    const fileInput = document.getElementById("data-input");

    if (!title || !fileInput.files.length) {
      alert("Please provide a title and upload a data file.");
      return;
    }

    const reader = new FileReader();
    reader.onload = function () {
      try {
        const data = JSON.parse(reader.result);
        if (!data || !data.length || typeof data[0] !== "object") {
          throw new Error("Invalid or empty JSON file.");
        }
        generateReport(title, data);
      } catch (error) {
        alert("Error reading JSON file: " + error.message);
      }
    };
    reader.readAsText(fileInput.files[0]);
  });

function generateReport(title, data) {
  const reportOutput = document.getElementById("report-output");
  reportOutput.innerHTML = `
      <h3>${title}</h3>
      <table>
        <thead>
          <tr>${Object.keys(data[0])
            .map((key) => `<th>${key}</th>`)
            .join("")}</tr>
        </thead>
        <tbody>
          ${data
            .map((row) => {
              const isLoss = row.Revenue < row.Expenses;
              const rowClass = isLoss ? "highlight-loss" : "";
              return `
              <tr class="${rowClass}">
                  ${Object.values(row)
                    .map((value) =>
                      typeof value === "string" &&
                      (value.includes(".png") || value.includes(".webp"))
                        ? `<td><img src=${value}></td>`
                        : `<td>${value}</td>`
                    )
                    .join("")}
              </tr>
              `;
            })
            .join("")}
        </tbody>
      </table>
    `;
}

function saveReport() {
  const content = document.querySelector("#report-output");
  const options = {
    margin: [1, 0.5, 1, 0.5],
    filename: "styled-report.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 1.5, useCORS: true },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
  html2pdf().set(options).from(content).save();
}

const printBtn = document.getElementById("print-report");
printBtn.addEventListener("click", saveReport);
