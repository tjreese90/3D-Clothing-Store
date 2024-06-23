# 3D-Clothing-Store

Creating a Three.js Clothing store web-app

## Description

This project is a web application for a 3D clothing store built using Three.js and React. It allows users to customize and visualize clothing items in 3D. The application is designed to provide an interactive and immersive shopping experience.

## Features

- Interactive 3D clothing customization
- File upload functionality for adding custom images
- Real-time rendering of customized clothing
- Various customization options including color and decals
- Integration with AI for generating custom designs

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/tjreese90/3D-Clothing-Store.git
   cd 3D-Clothing-Store
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Usage

### Customizing Clothing

1. Select a customization tab (Color Picker, File Picker, AI Picker) from the sidebar.
2. Use the controls in each tab to customize your clothing item.
   - **Color Picker**: Choose and apply colors to your clothing.
   - **File Picker**: Upload custom images to use as decals.
   - **AI Picker**: Generate custom designs using AI.

### Uploading Files

To upload an image file:

1. Click the "Upload File" button.
2. Select a valid image file (only image files are accepted).
3. Choose whether to apply the image as a logo or a full design.

### Generating AI Designs

1. Enter a prompt describing the design you want to generate.
2. Click the "Submit" button.
3. Wait for the AI to generate and apply the design to your clothing item.

## Components

### CustomButton

A reusable button component with customizable styles and click handling.

**Props:**

- `type`: Specifies the button type (`'filled'` | `'outline'`).
- `title`: The text to display on the button.
- `customStyles`: Additional CSS classes for styling.
- `handleClick`: Function to call on button click.
- `disabled`: Disables the button if `true`.

### FilePicker

A component for handling file uploads and reading files.

**Props:**

- `file`: The current file.
- `setFile`: Function to update the file state.
- `readFile`: Function to read the uploaded file.

### Customizer

The main component for handling the customization logic.

**States:**

- `file`: The current file being uploaded.
- `prompt`: The AI prompt for generating designs.
- `generatingImg`: Indicates if an AI image is being generated.
- `activeEditorTab`: The currently active editor tab.
- `activeFilterTab`: The currently active filter tab.

**Functions:**

- `handleDecals`: Applies decals to the clothing item.
- `readFile`: Reads the uploaded file.
- `handleSubmit`: Submits the AI prompt and handles the response.
- `generateTabContent`: Generates the content for the active editor tab.
- `handleActiveFilterTab`: Toggles the active filter tab.

## Technologies Used

- React
- Three.js
- Framer Motion
- Valtio (state management)
- PropTypes
- JavaScript (ES6+)

## License

This project is licensed under the MIT License. See the [LICENSE](<[LICENSE](https://opensource.org/license/mit)>) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Author

Your Name - [GitHub](https://github.com/tjreese90)
