# SankyaSutra Project

## Overview
The **Sankya Sutra Project** is an advanced AI-powered application integrating computer vision, gesture recognition, and generative AI technologies to provide an interactive and intuitive platform for mathematical problem-solving. This project showcases the seamless combination of cutting-edge tools like OpenCV, MediaPipe, and Google Generative AI.

---

## Key Technologies and Skills

- **Python**
- **Computer Vision**
- **OpenCV**
- **Pillow**
- **MediaPipe**
- **Google Generative AI**
- **Numpy**
- **Streamlit**

---

## Installation

To set up and run the project, install the following dependencies:

```bash
cd server_1
pip install -r requirements.txt

```
```bash
cd server_2
```

```bash
pip install opencv-python
pip install pillow
pip install mediapipe
pip install google-generativeai
pip install numpy
pip install streamlit
pip install streamlit-extras
```

Alternatively, use the `requirements.txt` file:

```bash
pip install -r requirements.txt
```

---

## Usage

### Frontend:
Navigate to the frontend directory and start the development server:

```bash
cd frontend
npm run dev
```

### Backend:
Navigate to the server directory and run the Flask application:

```bash
cd server_1
flask run
```

### Streamlit App:
To run the Streamlit interface:

```bash
cd server_2
streamlit run app.py
```

Open the app in your browser at: [http://localhost:8501](http://localhost:8501)

---

## Features

### 1. **Live Webcam Feed**

- **Webcam Initialization**: Leverages OpenCV for continuous live video feed capture, ensuring real-time interaction.
- **Image Frame Processing**: Processes each frame (BGR format), resizes, flips, and converts to RGB format for AI compatibility.

### 2. **Gesture Control with MediaPipe**

- **Hand Gesture Detection**: Utilizes MediaPipe to detect and track hand gestures in real time with precise hand landmark identification.
- **Landmark Visualization and Extraction**: Draws landmarks on detected hands and extracts their origin coordinates for gesture recognition.

### 3. **Gesture-Based Controls**

- **✍️ Draw Math Problems**: Use the Thumb and Index fingers to draw math problems.
- **🖱 Move Around**: Navigate the screen with Thumb, Index, and Middle fingers lifted.
- **🚼 Erase Content**: Activate erase mode with Thumb and Middle fingers to remove unwanted content.
- **🗑️ Reset Canvas**: Clear the canvas by lifting the Thumb and Pinky fingers.
- **📤 Send to AI Model**: Submit the drawing for analysis by lifting the Index and Middle fingers.

---

## Configuration

1. Clone the repository:

```bash
git clone https://github.com/gopiashokan/Apple-Inspired-AI-Calculator.git
```

2. Install required dependencies using `pip install -r requirements.txt`.

3. Add your **Google API Key** to the `.env` file.

---

## Contribution

Contributions are welcome! Feel free to open issues or submit pull requests.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Acknowledgments

Special thanks to all the open-source projects and contributors whose tools and libraries made this project possible.

