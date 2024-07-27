document.addEventListener('DOMContentLoaded', () => {
    const tipsContainer = document.getElementById('tips');
  
    const tips = [
      "Drink at least 8 glasses of water a day.",
      "Take a break every hour to stretch and move around.",
      "Look away from the screen every 20 minutes to rest your eyes.",
      "Maintain a good posture while sitting.",
      "Take a short walk during your breaks.",
      "Do some light exercises to stay active."
    ];
  
    tips.forEach(tip => {
      const div = document.createElement('div');
      div.classList.add('tip');
      div.innerHTML = `<i class="fas fa-check-circle"></i>${tip}`;
      tipsContainer.appendChild(div);
    });
  });