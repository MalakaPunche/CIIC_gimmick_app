/**
 * CIIC 2026 – Puzzle game logic
 * Drag pieces to targets; when all 4 are placed, show launch screen.
 * Depends on: Interact.js (global `interact`)
 */

let placedCount = 0;

function centerOf(el) {
  const r = el.getBoundingClientRect();
  return {
    x: r.left + r.width / 2,
    y: r.top + r.height / 2
  };
}

function distance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function lockPiece(piece) {
  piece.classList.add('glow');
  piece.style.pointerEvents = 'none';
  piece.setAttribute('data-locked', '1');
  placedCount++;
  checkComplete();
}

function checkSnap(piece) {
  if (piece.getAttribute('data-locked') === '1') return;

  const targetId = piece.dataset.target;
  const target = document.getElementById(targetId);

  const d = distance(centerOf(piece), centerOf(target));

  if (d < 40) {
    const tr = target.getBoundingClientRect();
    const pr = piece.getBoundingClientRect();

    const dx = tr.left - pr.left;
    const dy = tr.top - pr.top;

    const x = (parseFloat(piece.getAttribute('data-x')) || 0) + dx;
    const y = (parseFloat(piece.getAttribute('data-y')) || 0) + dy;

    piece.style.transform = `translate(${x}px, ${y}px)`;
    piece.setAttribute('data-x', x);
    piece.setAttribute('data-y', y);

    lockPiece(piece);
  }
}

function checkComplete() {
  if (placedCount === 4) {
    setTimeout(() => {
      document.getElementById('launchScreen').style.display = 'flex';
    }, 700);
  }
}

function initGame() {
  interact('.piece').draggable({
    listeners: {
      move(event) {
        const target = event.target;
        if (target.getAttribute('data-locked') === '1') return;

        const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
        const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

        target.style.transform = `translate(${x}px, ${y}px)`;
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
      },
      end(event) {
        checkSnap(event.target);
      }
    }
  });
}

// Run when DOM is ready and Interact.js is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGame);
} else {
  initGame();
}
