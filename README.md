# SuperFlats

[SuperFlats](https://superflatsproject.vercel.app/) is a responsive React application designed to manage and display a list of apartments dynamically. It allows users to view detailed information about available flats and add new flats through an intuitive form interface. The project demonstrates core React concepts, including state management, conditional rendering, and form handling, alongside responsive design principles for a clean and user-friendly experience.

[![CodeFactor](https://www.codefactor.io/repository/github/codelikeagirl29/superflats/badge)](https://www.codefactor.io/repository/github/codelikeagirl29/superflats)

---

## Features

- **View Apartment Listings:**
  - Displays a detailed list of apartments, including:
    - Apartment name
    - Location
    - Price
    - Availability status (Available or Not Available)
    - Apartment image
- **Add New Flats:**
  - A user-friendly form lets users add new apartments with details such as:
    - Name
    - Location
    - Price
    - Image URL
    - Availability (checkbox)
  - The form dynamically updates the apartment list on submission.
- **Dynamic UI:**
  - Conditional rendering for the "Add Flat" button and form visibility.
  - Interactive elements like hover effects for buttons and form validation.
- **Fully Responsive:**
  - Works seamlessly across devices with a clean, modern design.

---

## Project Structure

```
SuperFlats/
├── public/
├── src/
│   ├── components/
│   │   ├── App.jsx       # Main React component
│   │   ├── App.css       # Styling for the app
│   ├── main.jsx          # Entry point for React app
│   ├── assets/           # Static assets like images (optional)
├── index.html            # the index.html file
├── package.json          # Project dependencies
└── README.md             # Project documentation
```

---

## Technologies Used

- **Frontend Framework:** React.js
- **Styling:** CSS3 (responsive design principles)
- **Package Manager:** npm or yarn

---

## Getting Started

### Prerequisites
Before running the project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/codelikeagirl29/superflats.git
   cd superflats
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Run the Project
To start the development server:
```bash
npm start
# or
yarn start
```
The application will be available at `http://localhost:5173` in your browser.

---

## Usage

1. **View Flats:**
   - The homepage displays a list of preloaded apartments with details such as name, location, price, availability, and an image.

2. **Add a New Flat:**
   - Click the "Add Flat" button to open the form.
   - Fill in the details and click "Add Flat" to add the new apartment to the list.
   - The form resets after submission, and the new flat appears in the list.

3. **Responsive Design:**
   - Access the app from any device, including desktops, tablets, and smartphones.

---

## Folder and File Breakdown

### `App.jsx`
The main React component that:
- Handles the state for the list of flats.
- Manages the form functionality for adding new flats.
- Toggles the visibility of the "Add Flat" form.
- Dynamically renders the list of flats using the `map()` method.

### `App.css`
CSS file containing:
- Styling for a modern and responsive UI.
- Styles for the header, buttons, form, and flat list.

---

## Future Enhancements

Here are some features that can be added to improve the application:
1. **Search Functionality:**
   - Add a search bar to filter flats by name, location, or price.
2. **Edit and Delete:**
   - Allow users to update or remove an apartment listing.
3. **Sort by Price:**
   - Add sorting functionality to organize flats by price or availability.
4. **Backend Integration:**
   - Connect to a backend API to fetch and persist apartment data.

---

## Screenshots

### Home Page
![Home Page](https://res.cloudinary.com/dhw9dl4gm/image/upload/v1733184895/Superflats-12-02-2024_05_09_PM_mbrgax.png)

### Add Flat Form
![Add Flat Form](https://res.cloudinary.com/dhw9dl4gm/image/upload/v1733184938/Superflats-12-02-2024_06_15_PM_rznauq.png)

---

## Contributing

Contributions are welcome! To contribute:
1. Fork this repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes and commit them (`git commit -m "Add new feature"`).
4. Push to your branch (`git push origin feature-name`).
5. Open a pull request.

---

## Contact

For any questions or feedback, feel free to reach out:
- **Email:** codelikeagirl29@gmail.com
- **GitHub:** [My GitHub Profile](https://github.com/codelikeagirl29)
