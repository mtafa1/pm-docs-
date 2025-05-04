Dev Reflection Prompts:
1. How did you interpret and implement someone else’s idea?
I interpreted the user's request to add a dark mode toggle button below the "Send" button in the contact form. The user wanted this feature to be implemented within the body of the form, specifically under the submit button. The idea was clear, so I focused on ensuring that the toggle button was easily accessible without being intrusive to the rest of the design. To implement it, I used a simple button that toggles the dark mode by applying/removing a dark-mode class on the body element. The button was placed at the appropriate position in the form, ensuring it didn't interfere with the form submission but was still visible.

2. What were the challenges in development and collaboration?
The main challenge during development was ensuring that the dark mode functionality worked seamlessly while also keeping the page's original layout intact. It required modifying the CSS rules for the dark-mode class to apply to various page elements like the header, footer, and main content. Another challenge was ensuring the dark mode toggle button was placed correctly, following the user’s request to be located below the form and not in the navigation header.

On the collaboration front, it was a bit tricky to clearly understand how the user envisioned the button placement in the larger context of the page's design. By working through the user's feedback and testing different placements, we arrived at the most effective solution. Communicating and iterating over these minor design decisions was a crucial aspect of the process.

3. Which parts did you use AI tools for, and what did you learn from that?
AI tools were used mainly to generate and suggest both the HTML structure and the CSS styling. Specifically:

AI assisted in generating the structure of the form and the placement of the dark mode button within the layout.

AI was also helpful in writing the JavaScript function for toggling dark mode and providing suggestions for CSS changes to accommodate the dark theme.

From using AI tools, I learned that it's valuable for handling repetitive tasks (like writing basic HTML structure) and generating solutions quickly for common features like dark mode. However, AI tools work best when guided by human oversight, especially for design and user experience choices. The iterative process of adjusting layout and styling after initial suggestions helped refine the final implementation to meet the user's needs more effectively.