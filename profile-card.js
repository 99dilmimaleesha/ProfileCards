// Function to update the card content
function updateCard() {
    // Get values from the form
    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    const caption = document.getElementById('captionInput').value;
    const instagramLink = document.getElementById('instagramInput').value;
    const twitterLink = document.getElementById('twitterInput').value;
    const githubLink = document.getElementById('githubInput').value;
    const portfolioLink = document.getElementById('portfolioInput').value;
    const linkedinLink = document.getElementById('linkedinInput').value;
    const profilePic = document.getElementById('photoInput').files[0]; // Get the selected image

    // Update the card content
    document.getElementById('name').textContent = name;
    document.getElementById('email').textContent = email;
    document.getElementById('caption').textContent = caption;
    document.getElementById('instagramLink').href = instagramLink;
    document.getElementById('twitterLink').href = twitterLink;
    document.getElementById('githubLink').href = githubLink;
    document.getElementById('portfolioLink').href = portfolioLink;
    document.getElementById('linkedinLink').href = linkedinLink;

    // Update the profile picture
    if (profilePic) {
        const profilePicElement = document.getElementById('profilePic');
        profilePicElement.src = URL.createObjectURL(profilePic);
        profilePicElement.style.display = 'block';
    }
}

// Initial update
updateCard();

// Download card functionality
const downloadButton = document.getElementById('downloadButton');
downloadButton.addEventListener('click', () => {
    const card = document.querySelector('.card');
    const cardClone = card.cloneNode(true);
    const cardContainer = document.createElement('div');
    cardContainer.appendChild(cardClone);

    // Create a Blob containing the card as an HTML string
    const cardHTML = cardContainer.innerHTML;
    const blob = new Blob([cardHTML], { type: 'text/html' });

    // Create a temporary URL and trigger download
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'profile-card.html';
    a.click();
});
