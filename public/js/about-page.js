// Skateboard animation for about page only
document.addEventListener("DOMContentLoaded", function() {
  function keepSkateboard() {
    const board = document.createElement('div');
    board.innerHTML = '🛹';
    board.style.position = 'fixed';
    board.style.bottom = '20px';
    board.style.right = '20px';
    board.style.fontSize = '70px';
    board.style.animation = 'bounce 2s infinite';
    board.style.zIndex = '1000';
    document.body.appendChild(board);
  }

  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = `
    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-30px);
        }
        60% {
            transform: translateY(-15px);
        }
    }
  `;
  document.head.appendChild(styleSheet);
  keepSkateboard();
});
