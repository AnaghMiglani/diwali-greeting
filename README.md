# Diwali Greeting Generator

## Description
The Diwali Greeting Generator is a web application that allows users to create personalized Diwali greetings by uploading their photos, customizing messages, and choosing festive frames. The application supports photo uploads and utilizes Cloudinary for image storage and management.

## Website Link
Visit [https://diwali-greeting.onrender.com/](https://diwali-greeting.onrender.com/) or click [here](#Installation) for instructions on installing locally.

## Demo Video
Check out the [demo video](https://drive.google.com/file/d/1qBTceOcWg0eFsiFE9prWDfuJpF69f8ud/view?usp=sharing) to see how the application works

## Features
- Upload a photo and create a personalized greeting.
- Choose from various festive frames to enhance your greeting.
- Generate a unique URL to share your greeting.
- Easy-to-use interface.

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript, EJS (Embedded JavaScript templating)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose for ODM)
- **Image Management**: Cloudinary

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/AnaghMiglani/diwali-greeting.git
   cd diwali-greeting
2. **Install Dependencies**
    ```bash
   npm install
3. **Creating env file**
   Create a .env file and add the following details:
   ```bash
   MONGO_URI=your_mongodb_uri
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   BASE_URL=http://localhost:5000

4. **Running the application**
   ```bash
   node server.js
   
