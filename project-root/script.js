
const toggleThemeBtn = document.getElementById('toggleThemeBtn');
const body = document.body;

toggleThemeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

const toggleAnnouncementsBtn = document.getElementById('toggleAnnouncementsBtn');
const announcementList = document.getElementById('announcementList');

toggleAnnouncementsBtn.addEventListener('click', () => {
  announcementList.classList.toggle('collapsed');
  if (announcementList.classList.contains('collapsed')) {
    toggleAnnouncementsBtn.textContent = 'Show More';
  } else {
    toggleAnnouncementsBtn.textContent = 'Show Less';
  }
});
