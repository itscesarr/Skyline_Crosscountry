const textElement = document.getElementById('typing-effect');
  const text = textElement.textContent;
  let index = 0;
  textElement.textContent = ''; // Clear initial text

  function type() {
    if (index < text.length) {
      textElement.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100); // Adjust speed here (100ms per character)
    }
  }
  type();


   // Select all images within the table
   const images = document.querySelectorAll('#gallery img');

   // Default image URL to replace broken images
   const defaultImage = 'images/default-image.jpg';
 
   images.forEach(img => {
     // Attach an error event listener
     img.onerror = function() {
       this.src = defaultImage;
       this.onerror = null; // Prevent infinite loop if the default image is also missing
     };
   });