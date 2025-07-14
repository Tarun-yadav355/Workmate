
  document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, {
      threshold: 0.4 
    });

    const writeSection = document.querySelector(".write");
    if (writeSection) {
      observer.observe(writeSection);
    }
  });

  
  document.addEventListener("DOMContentLoaded", function () {
    const quoteElement = document.querySelector(".quote");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, {
      threshold: 0.3 
    });

    if (quoteElement) {
      observer.observe(quoteElement);
    }
  });

  
  document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".room-card");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
         
          setTimeout(() => {
            entry.target.classList.add("visible");
         }, index * 350); 
        }
      });
    }, {
      threshold: 0.3 
    });

    cards.forEach(card => observer.observe(card));
  });



  const boxes = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.1
  });

  boxes.forEach(box => {
    observer.observe(box);
  });


  const words = ["Trusted", "Verified", "Skilled", "Experienced", "Affordable"];
let current = 0;
const wordEl = document.getElementById("slidingWord");

function slideWord() {
  wordEl.classList.add("slide-up-out");

  setTimeout(() => {
    current = (current + 1) % words.length;
    wordEl.textContent = words[current];

    wordEl.classList.remove("slide-up-out");
    wordEl.classList.add("slide-up-in");

    setTimeout(() => {
      wordEl.classList.remove("slide-up-in");
    }, 500);
  }, 500);
}

setInterval(slideWord, 2000);


 function handleBooking() {
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!firstName || !lastName || !email) {
      alert("Please fill in First Name, Last Name, and Email before booking.");
    } else {
      const message = `Hi, I would like to book my stay.\nName: ${firstName} ${lastName}\nEmail: ${email}`;
      const whatsappLink = `https://wa.me/919007062180?text=${encodeURIComponent(message)}`;
      window.open(whatsappLink, '_blank');
    }
  }

  document.getElementById("butt").addEventListener("click", function (e) {
    e.preventDefault();
    handleBooking();
  });

  document.getElementById("col").addEventListener("click", function () {
    handleBooking();
  });

 