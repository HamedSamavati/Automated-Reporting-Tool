# Automated Reporting Tool

A lightweight web application for generating professional automated reports with custom styling and data-driven insights. This tool allows users to create, style, and export dynamic reports to PDF. Ideal for businesses and professionals looking for an efficient and customizable reporting solution.

---

## Features

- **Custom Report Generation**: Build reports from JSON data files with dynamic table rendering.
- **Conditional Formatting**: Highlight rows where specific conditions (e.g., revenue < expenses) are met. User can customize conditions to highlight rows in generated table.
- **Export to PDF**: Download fully styled reports as high-quality PDF files.
- **Responsive Design**: Works seamlessly on desktop and mobile devices.
- **Dynamic Styling**: Uses SASS for advanced styling and consistent theming.


---

## Technologies Used

- **HTML5**: Semantic structure of the application.
- **CSS3 & SASS**: For responsive and maintainable styling.
- **JavaScript (Vanilla)**: Core logic for dynamic table rendering and conditional formatting.
- **html2pdf.js**: To export reports as downloadable PDF files.
- **html2canvas**: To capture styled HTML content for PDF generation.

---

## Demo

[Live Demo](#https://hamedsamavati.github.io/) *(https://hamedsamavati.github.io/)*

---

## Installation and Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/HamedSamavati/Automated-Reporting-Tool.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Automated-Reporting-Tool
   ```
3. Open `index.html` in your browser to view the app locally.

---

## How to Use

1. Enter a title for your report and upload a JSON file containing the report data. A sample json file is included in the root path.
   - Example JSON format:
     ```json
     [
       {
         "Company": "Apple",
         "Revenue": 365.82,
         "Expenses": 250.0,
         "Benefit": 115.82,
         "Employees": 154000
       },
       {
         "Company": "HP",
         "Revenue": 63.49,
         "Expenses": 65.0,
         "Benefit": -1.51,
         "Employees": 51000
       }
     ]
     ```
2. Click the "Save Report" button to display the data as a styled table in the report.
3. Download the report as a PDF by clicking the "Export to PDF" button.

---

## Screenshots

### Example Report Preview
There is a sample of pdf saved in the root path.
![image](https://github.com/user-attachments/assets/74b9fbd3-3af3-42e9-9eb3-1f53b32c67ae)

---

## Future Enhancements

- Add a drag-and-drop interface for building report templates.
- Support for additional data formats (e.g., Excel).
- Improved pagination for large reports in the PDF.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

For any inquiries or collaboration opportunities, feel free to reach out:
- **Email**: hamed@samavati.ca
- **GitHub**: https://github.com/HamedSamavati
- **LinkedIn**: [https://www.linkedin.com/in/hamed-samavati-meng-eit-24427244/](#)

