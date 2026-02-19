# CIIC Logo Drag Launch

An interactive web-based puzzle game where users drag and drop logo pieces into a grid to reveal the complete event logo. When all pieces are correctly placed, a celebratory launch screen appears.

## 🎮 Features

- **Drag & Drop Interface**: Smooth, intuitive dragging of logo pieces using touch and mouse
- **Snap-to-Grid System**: Pieces automatically snap into place when dragged near their target positions
- **Visual Feedback**: 
  - Glowing animation when pieces are correctly placed
  - Guide images on target positions to help users
  - Smooth animations and transitions
- **Launch Screen**: Animated reveal screen that appears when the puzzle is completed
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Dark theme with elegant styling and visual effects

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)

### Running the Application

https://malakapunche.github.io/CIIC_gimmick_app/


## 🎯 How to Play

1. **Start**: The game displays 4 draggable logo pieces positioned around the game area
2. **Drag**: Click and drag each piece toward the center grid
3. **Snap**: When a piece is close enough to its target position (within 40px), it will automatically snap into place
4. **Lock**: Once snapped, the piece locks in position with a glowing animation
5. **Complete**: When all 4 pieces are correctly placed, the launch screen appears after a brief delay

## 🛠️ Tech Stack Used

- **HTML5**: Structure and markup
- **CSS3**: Styling, animations, and responsive design
- **JavaScript**: Game logic and interactivity
- **Interact.js**: Drag and drop functionality library (loaded via CDN)


## 📝 Game Logic

- **Piece Tracking**: Each piece has a `data-target` attribute linking it to its target position
- **Snap Detection**: Uses distance calculation between piece center and target center
- **Locking Mechanism**: Once snapped, pieces are locked with `data-locked="1"` to prevent further movement
- **Completion Check**: Tracks `placedCount` and triggers launch screen when all 4 pieces are placed


---

**Event Tagline**: "Converging Ideas, Accelerating Impacts"

