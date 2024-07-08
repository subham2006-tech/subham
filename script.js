function displayData() {
    var input1 = document.getElementById('input1').value;
    var input2 = document.getElementById('input2').value;

    if (input1 && input2) {
        document.getElementById('data1').innerText = `Virat Kohli,
        an icon of modern cricket, embodies passion, skill, and determination. Known for his aggressive batting style and exceptional fitness, he has redefined the game's standards. Kohli's leadership as a captain has been marked by his intensity and strategic acumen, making him one of India's most successful cricket captains. Beyond cricket, his commitment to fitness and discipline serves as inspiration to many. Kohli's journey from a young talent to a cricketing legend continues to inspire a new generation of players worldwide.`;
        document.getElementById('data2').innerText = ` Virat Kohli's 
        cricket career is a testament to relentless dedication and extraordinary talent. From his early days as a promising junior player in Delhi to becoming the linchpin of India's batting lineup, Kohli has consistently set new benchmarks. His journey is characterized by sheer hard work, resilience in the face of challenges, and an unwavering belief in his abilities. Kohli has amassed numerous records across all formats of the game, earning praise for his aggressive yet technically sound batting style. His rise to captaincy further underscores his leadership qualities and commitment to Indian cricket's success. Kohli's career trajectory continues to inspire aspiring cricketers globally, showcasing the rewards of perseverance and passion in the sport.`;
        document.getElementById('image1').innerHTML = '<img src="Virat-Kohli-RCB.jpg">';
        document.getElementById('image2').innerHTML = '<img src="th (1).jpg">';

        document.getElementById('data1').style.visibility = 'visible';
        document.getElementById('data2').style.visibility = 'visible';
        document.getElementById('image1').style.visibility = 'visible';
        document.getElementById('image2').style.visibility = 'visible';
    } else {
        alert('Please fill input sections');
    }
}