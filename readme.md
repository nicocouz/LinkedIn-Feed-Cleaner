# **LinkedIn Feed Cleaner**

LinkedIn Feed Cleaner is a minimalist and efficient Chrome extension that allows you to control the visibility of suggested and sponsored posts in your LinkedIn feed.

<div style="display: flex; justify-content: space-between; align-items: center; gap: 10px;">
  <img src="https://github.com/user-attachments/assets/598ccaad-d69b-4bd3-8466-6d7803ced46d" alt="Screenshot 1" width="45%">
  <img src="https://github.com/user-attachments/assets/70e8054a-9b2d-44b9-8e8b-8ff121c262df" alt="Screenshot 2" width="45%">
</div>

---

## **Features**

- **Hide/Show Suggested Posts:**
  - Quickly hide posts labeled as "Suggested," "Promoted," "Sponsorisé," or similar.
- **Persistent Mode:**
  - Your last preference (hidden or visible) is saved and automatically applied during your next visit.
- **Intuitive UI:**
  - A floating button in the bottom-left corner of the screen allows you to toggle between `Posts Hidden` and `Posts Visible`.

---

## **Installation**

1. **Clone or download this repository:**
   - Clone via Git:  
     ```bash
     git clone https://github.com/nicocouz/LinkedIn-Feed-Cleaner.git
     ```
  - Or download the ZIP [here](https://github.com/nicocouz/LinkedIn-Feed-Cleaner/archive/refs/heads/main.zip) and extract it.

2. **Enable developer mode in Chrome:**
   - Navigate to `chrome://extensions/` in your browser.
   - Enable **Developer Mode** using the toggle in the top-right corner.

3. **Load the unpacked extension:**
   - Click on **Load unpacked**.
   - Select the folder containing this project.

4. **Extension installed:**
   - It will now appear in your list of enabled extensions.

---

## **Usage**

1. **Open LinkedIn and navigate to your feed.**
   - The extension will activate automatically and display a floating button in the bottom-left corner of the page.

2. **Control visibility:**
   - Click the button to toggle between:
     - `👁️ Posts Visible`: All posts are displayed.
     - `🙈 Posts Hidden`: Suggested and sponsored posts are hidden.

---

## **How It Works**

The extension injects a script into your LinkedIn feed that:
- Identifies posts containing markers such as "Suggested," "Promoted," or "Sponsorisé."
- Applies or removes the CSS style `display: none` depending on your preference.

The state is stored in `localStorage` for a seamless user experience.

---

## **Technologies Used**

- **Manifest V3**: For Chrome extension configuration.
- **JavaScript**: Core logic for DOM manipulation.
- **Inline CSS**: Styles applied directly in the script for simplicity.

---
