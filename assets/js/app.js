// Tabs
document.querySelectorAll('.tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    const target = document.querySelector(btn.dataset.target);
    if (target) target.classList.add('active');
  });
});

// Quiz
const answers = { q1: 'b', q2: 'c' };
const form = document.getElementById('quiz-form');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  let score = 0, total = Object.keys(answers).length;
  Object.entries(answers).forEach(([k, v]) => {
    const picked = form.querySelector(`input[name="${k}"]:checked`);
    if (picked && picked.value === v) score++;
  });
  const result = document.getElementById('quiz-result');
  result.textContent = `Score: ${score}/${total}`;
});
