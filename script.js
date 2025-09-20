// Get all the FAQ question elements.
const questions = document.querySelectorAll('.q');

// Iterate through each question and add a click event listener.
questions.forEach(question => {
  question.addEventListener('click', () => {
    // Check if the clicked question has the "active" class.
    const isActive = question.classList.contains('active');

    // Remove the "active" class from all questions.
    questions.forEach(q => {
      q.classList.remove('active');
      // Change the button text back to "+".
      q.querySelector('button.more').textContent = '+';
      // Remove any existing answer paragraph to hide it.
      const existingAnswer = q.querySelector('.answer-p');
      if (existingAnswer) {
        existingAnswer.remove();
      }
    });

    // If the clicked question was not already active, add the active class.
    if (!isActive) {
      question.classList.add('active');
      // Change the button text to "x".
      question.querySelector('button.more').textContent = 'x';

      // Create a new paragraph element to hold the answer.
      const answer = document.createElement('p');
      answer.classList.add('answer-p');

      // Determine which question was clicked and set the corresponding answer text.
      if (question.classList.contains('q1')) {
        answer.textContent = "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!";
      } else if (question.classList.contains('q2')) {
        answer.textContent = "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs 250 to Rs 1,100 a month. No extra costs, no contracts.";
      } else if (question.classList.contains('q3')) {
        answer.textContent = "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.";
      } else if (question.classList.contains('q4')) {
        answer.textContent = "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.";
      } else if (question.classList.contains('q5')) {
        answer.textContent = "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.";
      } else if (question.classList.contains('q6')) {
        answer.textContent = "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.";
      }
      
      // Insert the answer paragraph right after the question.
      question.parentNode.insertBefore(answer, question.nextSibling);
    }
  });
});