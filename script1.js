document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  const resultWindow = window.open('', '_blank');
  resultWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Result Page</title>
          <link rel="stylesheet" href="styles.css">
      </head>
      <body>
          <div class="result-container">
              <div class="result-header">
                  <div>Virat Kohli</div>
                  <img src="virat-kohli-RCB.jpg"alt="Virat Kohli">
              </div>
              <div class="result-body">
                  <img src="virat-kohli-RCB.jpg"alt="Virat Kohli">
                  <hr>
                  <div>Virat Kohli</div>
              </div>
          </div>
      </body>
      </html>
  `);
});