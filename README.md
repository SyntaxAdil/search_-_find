# Search & Find - Text Search and Highlight Tool

A simple and elegant web application that allows you to search for specific words or characters in text and highlights all matches with customizable colors.

## Features

- **Real-time Search**: Find and highlight words or phrases instantly
- **Case Sensitive Option**: Toggle between case-sensitive and case-insensitive search
- **Custom Highlight Color**: Choose your preferred highlight color using a color picker
- **Match Counter**: Shows total number of matches found
- **Character Counter**: Displays total character count in the text area
- **Demo Text Generator**: Quickly generate sample text for testing
- **Clear Function**: Reset all inputs and text with one click
- **Keyboard Support**: Press Enter to search directly from the input field

## How to Use

1. **Enter Text**: Type or paste your text in the content area
2. **Search**: Type the word or phrase you want to find in the search box
3. **Find Matches**: Click the "Find" button or press Enter to highlight all matches
4. **Customize**: 
   - Check "Case Sensitive" for exact case matching
   - Use the color picker to change highlight color
5. **Clear**: Click "Clear" to reset everything
6. **Demo**: Click "Generate Demo Text" to load sample text

## Installation

1. Download all three files:
   - `index.html`
   - `style.css`
   - `app.js`

2. Place them in the same folder

3. Open `index.html` in your web browser

## File Structure

```
search-and-find/
│
├── index.html          # Main HTML structure
├── style.css           # Styling and layout
└── app.js             # JavaScript functionality
```

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Edge
- Safari
- Opera

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)

## Features Breakdown

### Search Functionality
- Supports single words, phrases, and special characters
- Real-time validation with error indication
- Case-sensitive and case-insensitive modes

### Text Editor
- Contenteditable div for flexible text input
- Custom scrollbar styling
- Auto character counting
- Multi-line support

### Visual Feedback
- Error messages for no matches
- Border highlighting for validation
- Smooth hover effects on buttons
- Color-coded match highlighting

## Author

© Abdur Rahman Adil

## License

Free to use for personal and educational purposes.

---

**Note**: This is a client-side application that doesn't store any data. All processing happens in your browser.