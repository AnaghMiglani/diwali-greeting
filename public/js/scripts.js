let uniqueLink;
document.getElementById('greetingForm').onsubmit = async function (event) {
    event.preventDefault();

    const formData = new FormData(this);

    try {
        const response = await fetch('/upload', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();

        if (response.ok) {
            uniqueLink = `${window.location.origin}/greeting/${data.uniqueId}`;
            console.log('Your greeting link:', uniqueLink);

            document.getElementById('result').innerHTML = `
                <p>Your greeting has been created! Share this link:</p>
                <a href="${uniqueLink}" target="_blank">${uniqueLink}</a>
                <br>
                <button onclick="shareOnFacebook()">Share on Facebook</button>
                <button onclick="shareOnTwitter()">Share on Twitter</button>
                <button onclick="shareOnWhatsApp()">Share on WhatsApp</button>
            `;
        } else {
            document.getElementById('result').innerHTML = `<p>Error: ${data.error || 'Unknown error'}</p>`;
        }
    } catch (error) {
        document.getElementById('result').innerHTML = `<p>Error: Could not create greeting</p>`;
        console.error('Error uploading greeting:', error);
    }
};

function shareOnFacebook() {
    console.log('Facebook share button clicked');
    const url = encodeURIComponent(uniqueLink);
    const message = encodeURIComponent('Check out my Diwali greeting!');
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${message}`, '_blank');
}

function shareOnTwitter() {
    console.log('Twitter share button clicked');
    const url = encodeURIComponent(uniqueLink);
    const message = encodeURIComponent('Check out my Diwali greeting!');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${message}`, '_blank');
}

function shareOnWhatsApp() {
    console.log('WhatsApp share button clicked');
    const url = encodeURIComponent(uniqueLink);
    const message = encodeURIComponent('Check out my Diwali greeting!');
    window.open(`https://wa.me/?text=${message} ${url}`, '_blank');
}
