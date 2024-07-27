// popup.js
document.addEventListener('DOMContentLoaded', () => {
    const historyList = document.getElementById('history');
    const viewTipsButton = document.getElementById('viewTips');
  
    // Fetch break history from storage
    chrome.storage.local.get(['activityData'], (result) => {
      const activityData = result.activityData || [];
      activityData.slice(-5).reverse().forEach(entry => {
        const li = document.createElement('li');
        li.textContent = `${new Date(entry.time).toLocaleTimeString()}: ${entry.recommendation}`;
        historyList.appendChild(li);
      });
    });
  
    viewTipsButton.addEventListener('click', () => {
      chrome.tabs.create({ url: "tips.html" });
    });
  });