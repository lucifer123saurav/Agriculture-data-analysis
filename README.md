# Agriculture Data Analysis Project

This project aims to analyze agricultural data spanning multiple years to derive insights about crop production, yields, and cultivation areas. The data is processed to create two tables showcasing maximum and minimum crop productions per year (**Table 1**) and average yields and cultivation areas for each crop between 1950-2020 (**Table 2**).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Data Format](#data-format)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd agriculture-data-analysis
2. **Install dependencies:**
   yarn install

3. **Start the application:**
   yar start


## Usage

Once the application is running, navigate to the appropriate route to view the tables generated from the processed data.

## Data Format

### Table 1: Maximum and Minimum Crop Productions per Year

Data is aggregated to find the maximum and minimum crop productions recorded each year.

### Table 2: Average Yields and Cultivation Areas for Each Crop (1950-2020)

Data is aggregated to compute the average yield and cultivation area for each crop across the years 1950 to 2020.

## Project Structure

The project structure is organized as follows:

- **src/**: Contains the source code files.
  - **App.js**: Entry point of the application.
  - **Table1.js**: Component for rendering Table 1.
  - **Table2.js**: Component for rendering Table 2.
  - **data.json**: JSON file containing the agricultural data.
  - **helpers.js**: Contains helper functions to process data for Table 1 and Table 2.

## Contributing

Contributions are welcome! Here are some ways you can contribute:

- Improve data processing algorithms for better performance.
- Add features to visualize the data in different formats.
- Fix bugs and issues identified in the project.

To contribute, fork the repository and submit a pull request with your changes.
