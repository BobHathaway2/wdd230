const lastAccessedSpan= document.querySelector('#lastAccessed');
let now = new Date();


lastAccessedDateString = localStorage.getItem('lastAccess');
if (lastAccessedDateString != null) {
    let lastAccessedDate = new Date(lastAccessedDateString);
    daysSinceLastAccess = Math.floor((now.getTime() - lastAccessedDate.getTime()) / (1000 * 60 * 60 *24));
    if (daysSinceLastAccess == 0) {
        lastAccessedSpan.textContent = 'Your Last Access: Within last 24 hours'
    } else {
        lastAccessedSpan.textContent = `Your Last Access: ${daysSinceLastAccess} day(s) ago`;
    }
} else {
    lastAccessedSpan.textContent = 'Your Last Access: This is your first access of this site! (or first since you cleared local storage!)'
}
localStorage.setItem('lastAccess', now);