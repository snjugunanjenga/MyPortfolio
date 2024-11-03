// CONTACT FORM SUBMISSION
function submitContactForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (name && email && subject && message) {
        document.getElementById('formMessage').innerText = "Thank you for reaching out! I'll get back to you soon.";
        document.getElementById('formMessage').style.color = "green";
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('formMessage').innerText = "Please fill in all fields before submitting.";
        document.getElementById('formMessage').style.color = "red";
    }
}

// BLOG POST MOCK DATA (Contact Page)
const blogPosts = [
    { title: "Understanding Data Science", description: "An introduction to the world of data science and its applications." },
    { title: "Machine Learning 101", description: "Basics of machine learning for beginners." },
    { title: "Building AI with ChatGPT", description: "How ChatGPT works and tips for prompt engineering." },
    { title: "Web Development Essentials", description: "Top tools and practices for efficient web development." }
];

// DISPLAY BLOG POSTS
function displayBlogPosts() {
    const blogContainer = document.getElementById('blogPosts');
    blogPosts.forEach(post => {
        const blogCard = `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${post.title}</h5>
                        <p class="card-text">${post.description}</p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        `;
        blogContainer.innerHTML += blogCard;
    });
}

// PAGE INTERACTIVITY
document.addEventListener('DOMContentLoaded', () => {
    displayBlogPosts();  // Initialize blog posts

    // SERVICES CARD INTERACTIONS
    const serviceCards = document.querySelectorAll('.card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.classList.add('shadow-lg');
        });
        card.addEventListener('mouseout', () => {
            card.classList.remove('shadow-lg');
        });
    });
    
    // SCROLL-TO-SECTION BUTTONS
    const contactButton = document.querySelectorAll('.btn-primary');
    contactButton.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            document.getElementById('contactForm').scrollIntoView({ behavior: 'smooth' });
        });
    });
});

// Animate progress bars when they come into view
document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.progress-bar');

    window.addEventListener('scroll', function() {
        progressBars.forEach(bar => {
            const barPosition = bar.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;

            if (barPosition < screenPosition) {
                bar.style.width = bar.getAttribute('style').match(/width: (\d+%);/)[1];
            }
        });
    });
});
