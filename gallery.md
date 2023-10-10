<!--
This file uses markdown. If you need to know more about markdown, visit https://github.com/CaedmonMyers/untitled-repo/wiki/Markdown-Basics
-->
<style>
    .pointerHover { cursor: pointer; }
    p#moreButtonStatus { display: inline; }
details[open] p#moreButtonStatus { display:  none; }
p#lessButtonStatus { display: none; }
details[open] p#lessButtonStatus { display:  inline; }
/*.expand { color: #FF7438;}*/
</style>

<script>
    document.querySelector('moreButton').addEventListener('toggle', function (e) {
    var statusElement = document.getElementById('moreButtonStatus');
    if (this.open) {
        statusElement.innerText = "Hidden";
    } else {
        statusElement.innerText = "Shown";
    }
});
</script>
<script>
    document.querySelector('lessButton').addEventListener('toggle', function (e) {
    var statusElement = document.getElementById('lessButtonStatus');
    if (this.open) {
        statusElement.innerText = "Hidden";
    } else {
        statusElement.innerText = "Shown";
    }
});
</script>


<!--Start of Gallery-->

<div class="cards">
    <img src="Images/Stock/stock1.jpeg" class="card" alt="stock image of robotics team">
    <img src="Images/Stock/stock2.jpeg" class="card" alt="stock image of robotics team">
    <img src="Images/Stock/stock3.jpeg" class="card" alt="stock image of robotics team">
    <img src="Images/Stock/stock4.jpeg" class="card" alt="stock image of robotics competiton">
    <img src="Images/Stock/stock1.jpeg" class="card" alt="stock image of robotics team">
    <img src="Images/Stock/stock2.jpeg" class="card" alt="stock image of robotics team">
    <img src="Images/Stock/stock3.jpeg" class="card" alt="stock image of robotics team">
    <img src="Images/Stock/stock4.jpeg" class="card" alt="stock image of robotics competiton">
</div>
