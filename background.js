// Dataset and KNN model
const dataset = [
    { time: 9, duration: 30, activity: 1, recommendation: "Drink a glass of water." },
    { time: 10, duration: 60, activity: 2, recommendation: "Stand up and stretch for a few minutes." },
    { time: 11, duration: 45, activity: 3, recommendation: "Take a short walk around your room." },
    { time: 12, duration: 20, activity: 1, recommendation: "Do some light stretching exercises." },
    { time: 13, duration: 30, activity: 2, recommendation: "Stand up and do a quick walk." },
    { time: 14, duration: 60, activity: 3, recommendation: "Stretch your legs and back." },
    { time: 15, duration: 45, activity: 1, recommendation: "Perform some deep breathing exercises." },
    { time: 16, duration: 30, activity: 2, recommendation: "Do some seated back stretches." },
    { time: 17, duration: 60, activity: 3, recommendation: "Take a brief walk outside." },
    { time: 18, duration: 45, activity: 1, recommendation: "Try some gentle yoga poses." },
    { time: 19, duration: 30, activity: 2, recommendation: "Stretch your wrists and fingers." },
    { time: 20, duration: 60, activity: 3, recommendation: "Do a few quick bodyweight exercises." },
    { time: 21, duration: 45, activity: 1, recommendation: "Stand and do some gentle movements." },
    { time: 22, duration: 30, activity: 2, recommendation: "Perform some seated neck stretches." },
    { time: 23, duration: 60, activity: 3, recommendation: "Take a moment to relax and stretch your body." },
    { time: 24, duration: 45, activity: 1, recommendation: "Get up and walk around your space." },
    { time: 25, duration: 30, activity: 2, recommendation: "Do some simple desk exercises." },
    { time: 26, duration: 60, activity: 3, recommendation: "Walk around the office or home." },
    { time: 27, duration: 45, activity: 1, recommendation: "Do some seated shoulder rolls." },
    { time: 28, duration: 30, activity: 2, recommendation: "Stand up and do some gentle stretching." },
    { time: 29, duration: 60, activity: 3, recommendation: "Take a walk in your neighborhood." },
    { time: 30, duration: 45, activity: 1, recommendation: "Do some breathing exercises and relax." },
    { time: 31, duration: 30, activity: 2, recommendation: "Stretch your arms and legs." },
    { time: 32, duration: 60, activity: 3, recommendation: "Do some light cardio exercises." },
    { time: 33, duration: 45, activity: 1, recommendation: "Get up and do a few stretches." },
    { time: 34, duration: 30, activity: 2, recommendation: "Walk around your workspace." },
    { time: 35, duration: 60, activity: 3, recommendation: "Do some gentle yoga poses." },
    { time: 36, duration: 45, activity: 1, recommendation: "Stretch your back and sides." },
    { time: 37, duration: 30, activity: 2, recommendation: "Take a quick walk or do some stretching." },
    { time: 38, duration: 60, activity: 3, recommendation: "Take a brief walk outside or around the room." },
    { time: 39, duration: 45, activity: 1, recommendation: "Do some seated leg stretches." },
    { time: 40, duration: 30, activity: 2, recommendation: "Stand up and do some quick exercises." },
    { time: 41, duration: 60, activity: 3, recommendation: "Perform a short workout or walk." },
    { time: 42, duration: 45, activity: 1, recommendation: "Do some gentle neck stretches." },
    { time: 43, duration: 30, activity: 2, recommendation: "Stretch your shoulders and arms." },
    { time: 44, duration: 60, activity: 3, recommendation: "Take a walk or do some standing exercises." },
    { time: 45, duration: 45, activity: 1, recommendation: "Do some seated stretches and relax." },
    { time: 46, duration: 30, activity: 2, recommendation: "Take a quick walk or stand up and stretch." },
    { time: 47, duration: 60, activity: 3, recommendation: "Do some light cardio or stretching exercises." },
    { time: 48, duration: 45, activity: 1, recommendation: "Get up and move around for a few minutes." },
    { time: 49, duration: 30, activity: 2, recommendation: "Stretch your legs and back." },
    { time: 50, duration: 60, activity: 3, recommendation: "Take a brief walk or perform light exercises." },
    { time: 51, duration: 45, activity: 1, recommendation: "Do some deep breathing and stretching." },
    { time: 52, duration: 30, activity: 2, recommendation: "Stand up and do a quick stretch." },
    { time: 53, duration: 60, activity: 3, recommendation: "Walk around the office or home for a bit." },
    { time: 54, duration: 45, activity: 1, recommendation: "Try some seated back stretches and relax." },
    { time: 55, duration: 30, activity: 2, recommendation: "Stretch your wrists and fingers." },
    { time: 56, duration: 60, activity: 3, recommendation: "Perform some light exercises or a short walk." },
    { time: 57, duration: 45, activity: 1, recommendation: "Stand up and do some gentle movements." },
    { time: 58, duration: 30, activity: 2, recommendation: "Do some simple desk exercises and stretch." },
    { time: 59, duration: 60, activity: 3, recommendation: "Take a walk outside or do some stretching." },
    { time: 60, duration: 45, activity: 1, recommendation: "Stretch your back and legs." },
    { time: 61, duration: 30, activity: 2, recommendation: "Stand up and do a quick stretch." },
    { time: 62, duration: 60, activity: 3, recommendation: "Take a brief walk or perform light stretches." },
    { time: 63, duration: 45, activity: 1, recommendation: "Get up and move around for a few minutes." },
    { time: 64, duration: 30, activity: 2, recommendation: "Stretch your arms and back." },
    { time: 65, duration: 60, activity: 3, recommendation: "Walk around or do some light exercises." },
    { time: 66, duration: 45, activity: 1, recommendation: "Do some seated stretches and relax." },
    { time: 67, duration: 30, activity: 2, recommendation: "Take a quick walk and stretch." },
    { time: 68, duration: 60, activity: 3, recommendation: "Perform light cardio exercises or take a walk." },
    { time: 69, duration: 45, activity: 1, recommendation: "Stand up and stretch your legs and back." },
    { time: 70, duration: 30, activity: 2, recommendation: "Do some simple stretching and movement." },
    { time: 71, duration: 60, activity: 3, recommendation: "Take a walk around the room or do some stretching." },
    { time: 72, duration: 45, activity: 1, recommendation: "Stretch your arms and legs." },
    { time: 73, duration: 30, activity: 2, recommendation: "Stand up and do a quick exercise." },
    { time: 74, duration: 60, activity: 3, recommendation: "Perform some light exercises or a brief walk." },
    { time: 75, duration: 45, activity: 1, recommendation: "Get up and do some seated stretches." },
    { time: 76, duration: 30, activity: 2, recommendation: "Stretch your back and shoulders." },
    { time: 77, duration: 60, activity: 3, recommendation: "Take a brief walk outside or perform light stretches." },
    { time: 78, duration: 45, activity: 1, recommendation: "Do some seated leg stretches and relax." },
    { time: 79, duration: 30, activity: 2, recommendation: "Stand up and do some gentle stretches." },
    { time: 80, duration: 60, activity: 3, recommendation: "Walk around or do some light exercises." },
    { time: 81, duration: 45, activity: 1, recommendation: "Stretch your back and legs." },
    { time: 82, duration: 30, activity: 2, recommendation: "Take a quick walk or perform some stretches." },
    { time: 83, duration: 60, activity: 3, recommendation: "Do some light cardio exercises or take a walk." },
    { time: 84, duration: 45, activity: 1, recommendation: "Stand up and do some gentle stretches." },
    { time: 85, duration: 30, activity: 2, recommendation: "Stretch your shoulders and back." },
    { time: 86, duration: 60, activity: 3, recommendation: "Take a walk around or perform light exercises." },
    { time: 87, duration: 45, activity: 1, recommendation: "Get up and stretch your legs and back." },
    { time: 88, duration: 30, activity: 2, recommendation: "Do some seated stretching exercises." },
    { time: 89, duration: 60, activity: 3, recommendation: "Take a brief walk or do some light stretching." },
    { time: 90, duration: 45, activity: 1, recommendation: "Do some deep breathing and stretch." },
    { time: 91, duration: 30, activity: 2, recommendation: "Stand up and stretch your back and arms." },
    { time: 92, duration: 60, activity: 3, recommendation: "Walk around or do some light exercises." },
    { time: 93, duration: 45, activity: 1, recommendation: "Stretch your back and shoulders." },
    { time: 94, duration: 30, activity: 2, recommendation: "Take a quick walk or do some stretching." },
    { time: 95, duration: 60, activity: 3, recommendation: "Perform some light cardio or take a walk." },
    { time: 96, duration: 45, activity: 1, recommendation: "Stand up and do some gentle movements." },
    { time: 97, duration: 30, activity: 2, recommendation: "Stretch your legs and arms." },
    { time: 98, duration: 60, activity: 3, recommendation: "Walk around or do some light stretching exercises." },
    { time: 99, duration: 45, activity: 1, recommendation: "Do some seated stretches and relax." },
    { time: 100, duration: 30, activity: 2, recommendation: "Take a quick walk or do some stretching." }
];
  
  const knnModel = trainKNN(dataset);
  
  // Set an alarm to trigger every 30 minutes
  chrome.alarms.create("healthyBreak", {
    delayInMinutes: 30,
    periodInMinutes: 30
  });
  
  // Listen for the alarm and show a notification
  chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "healthyBreak") {
      // Fetch the user's activity data
      console.log("Alarm triggered");
      chrome.storage.local.get(['activityData'], (result) => {
        const activityData = result.activityData || [];
        const currentTime = new Date().getHours();
        const duration = activityData.length ? (new Date() - new Date(activityData[activityData.length - 1].time)) / 60000 : 60;
        const activityLevel = Math.floor(Math.random() * 3) + 1; // Simulate activity level
        
        const recommendation = getKNNRecommendation(currentTime, duration, activityLevel, knnModel);
        
        chrome.notifications.create({
          type: "basic",
          iconUrl: "icon.png",
          title: "Time for a Break!",
          message: recommendation,
          buttons: [
            { title: "Got it!" },
            { title: "View Tip" }
          ],
          priority: 1
        });
  
        // Store the break activity
        activityData.push({ time: new Date().toISOString(), recommendation });
        chrome.storage.local.set({ activityData });
      });
    }
  });
  
  // Optional: Add listener for notification button click
  chrome.notifications.onButtonClicked.addListener((notificationId, buttonIndex) => {
    if (buttonIndex === 0) {
      chrome.notifications.clear(notificationId);
    } else if (buttonIndex === 1) {
      chrome.tabs.create({ url: "tips.html" });
    }
  });
  
  // KNN functions
  function trainKNN(dataset) {
    const features = dataset.map(entry => [entry.time, entry.duration, entry.activity]);
    const labels = dataset.map(entry => entry.recommendation);
  
    return { features, labels };
  }
  
  function getKNNRecommendation(time, duration, activity, knnModel) {
    const distances = knnModel.features.map((feature, index) => {
      const distance = Math.sqrt(
        (feature[0] - time) ** 2 + 
        (feature[1] - duration) ** 2 + 
        (feature[2] - activity) ** 2
      );
      return { distance, recommendation: knnModel.labels[index] };
    });
  
    distances.sort((a, b) => a.distance - b.distance);
  
    return distances[0].recommendation;
  }
  