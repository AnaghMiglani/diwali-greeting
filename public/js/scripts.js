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
            const uniqueLink = `${window.location.origin}/greeting/${data.uniqueId}`;
            console.log('Your greeting link:', uniqueLink);

            document.getElementById('result').innerHTML = `
                <p>Your greeting has been created! Share this link:</p>
                <a href="${uniqueLink}" target="_blank">${uniqueLink}</a>
            `;
        } else {
            document.getElementById('result').innerHTML = `<p>Error: ${data.error || 'Unknown error'}</p>`;
        }
    } catch (error) {
        document.getElementById('result').innerHTML = `<p>Error: Could not create greeting</p>`;
        console.error('Error uploading greeting:', error);
    }
};
