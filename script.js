
function toggleCard(card) {
  card.classList.toggle('open');
}

function showTooltip(event, text) {
  const tooltip = document.getElementById('tooltip');
  tooltip.textContent = text;
  tooltip.style.left = event.pageX + 'px';
  tooltip.style.top = event.pageY + 'px';
  tooltip.style.display = 'block';
}

function hideTooltip() {
  const tooltip = document.getElementById('tooltip');
  tooltip.style.display = 'none';
}
